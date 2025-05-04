/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Movie, Prisma } from '@root/generated/prisma';
import { EmailService } from 'src/email/email.service';
import { StorageService } from 'src/storage/storage.service';

// Maximum time (in minutes) a movie can be without an image
const MAX_PENDING_IMAGE_TIME = 30;

@Injectable()
export class MoviesService {
  constructor(
    private prismaService: PrismaService,
    private emailService: EmailService,
    private storageService: StorageService,
  ) {
    // Set up periodic cleanup of movies without images (optional)
    this.setupCleanupJob();
  }

  /**
   * Step 1: Create initial movie with basic data, but no image yet
   */
  async createInitial(
    userId: number,
    createMovieDto: CreateMovieDto,
  ): Promise<Movie> {
    try {
      // Create the movie with a placeholder for the image
      // We use a timestamp to know when the movie was created without an image
      const movie = await this.prismaService.movie.create({
        data: {
          ...createMovieDto,
          // Set a marker to identify that this movie is waiting for an image
          coverImage: `pending_${Date.now()}`,
          releaseDate: new Date(createMovieDto.releaseDate),
          userId,
        },
      });

      // Schedule release email, if applicable
      const releaseDate = new Date(createMovieDto.releaseDate);
      const now = new Date();

      if (releaseDate > now) {
        await this.emailService.scheduleMovieReleaseEmail(
          movie.id,
          userId,
          releaseDate,
        );
      }

      return movie;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException('Movie title must be unique');
        }
      }
      throw new InternalServerErrorException(
        'Failed to create movie: ' + error.message,
      );
    }
  }

  /**
   * Step 2: Upload the image for an existing movie
   */
  async uploadCoverImage(
    id: number,
    coverImageFile: any,
    userId: number,
  ): Promise<Movie> {
    try {
      console.log(`Starting image upload process for movie ID: ${id}`);

      // Check if the movie exists and belongs to the user
      const movie = await this.prismaService.movie.findUnique({
        where: { id },
      });

      if (!movie) {
        console.log(`Movie ID ${id} not found`);
        throw new NotFoundException(`Movie with ID ${id} not found`);
      }

      if (movie.userId !== userId) {
        console.log(
          `User ID ${userId} does not have permission to modify movie ID ${id}`,
        );
        throw new ForbiddenException(
          'You do not have permission to modify this movie',
        );
      }

      // Check if the movie is waiting for an image (starts with 'pending_')
      const isPending = movie.coverImage.startsWith('pending_');
      console.log(
        `Movie ID ${id} status: ${isPending ? 'Waiting for image' : 'Already has an image'}`,
      );

      // If not pending, it means it already has an image
      // In that case, we'll delete the old image before uploading a new one
      if (!isPending) {
        try {
          console.log(`Deleting old image: ${movie.coverImage}`);
          await this.storageService.deleteFile(movie.coverImage);
          console.log('Old image deleted successfully');
        } catch (error) {
          console.error('Failed to delete old image:', error);
          // We continue even if deletion fails
        }
      }

      // Upload the new image
      console.log('Starting upload of new image to Cloudflare R2');
      const imageUrl = await this.storageService.uploadFile(coverImageFile);
      console.log(`Upload successful! Image URL: ${imageUrl}`);

      // Update the movie with the URL of the new image
      console.log(`Updating movie ID ${id} record with the new image URL`);
      const updatedMovie = await this.prismaService.movie.update({
        where: { id },
        data: {
          coverImage: imageUrl,
        },
      });

      console.log(
        `✅ Upload process completed successfully for movie ID: ${id} (${movie.title})`,
      );
      return updatedMovie;
    } catch (error) {
      // If there's an error during upload, we don't want to leave the movie without an image
      // The controller will decide if it should delete the movie
      console.error(`❌ Error during image upload for movie ID ${id}:`, error);
      throw error;
    }
  }

  /**
   * Function that checks and cleans up old pending movies
   * This prevents movies from staying without an image permanently
   */
  private setupCleanupJob() {
    // Run cleanup every 10 minutes
    setInterval(
      async () => {
        try {
          const now = Date.now();
          const movies = await this.prismaService.movie.findMany({
            where: {
              coverImage: {
                startsWith: 'pending_',
              },
            },
          });

          for (const movie of movies) {
            // Extract the timestamp from the placeholder
            const timestamp = parseInt(
              movie.coverImage.replace('pending_', ''),
              10,
            );

            // Check if maximum allowed time has passed
            if (now - timestamp > MAX_PENDING_IMAGE_TIME * 60 * 1000) {
              console.log(
                `Removing movie ${movie.id} that has been without image for too long`,
              );
              await this.remove(movie.id);
            }
          }
        } catch (error) {
          console.error('Error in cleanup job:', error);
        }
      },
      10 * 60 * 1000,
    ); // 10 minutes
  }

  async findAll({
    durationMin,
    durationMax,
    releaseDateMin,
    releaseDateMax,
    title,
    scoreMin,
    scoreMax,
    paginationPage = 1,
    paginationPerPage = 10,
  }: {
    durationMin?: number;
    durationMax?: number;
    releaseDateMin?: string;
    releaseDateMax?: string;
    title?: string;
    scoreMin?: number;
    scoreMax?: number;
    paginationPage?: number;
    paginationPerPage?: number;
  }) {
    const take = Math.min(Math.max(paginationPerPage, 10), 50);
    const skip = (paginationPage - 1) * take;

    return await this.prismaService.movie.findMany({
      where: {
        duration: {
          gte: durationMin ?? undefined,
          lte: durationMax ?? undefined,
        },
        releaseDate: {
          gte: releaseDateMin ? new Date(releaseDateMin) : undefined,
          lte: releaseDateMax ? new Date(releaseDateMax) : undefined,
        },
        title: title
          ? {
              contains: title,
              mode: 'insensitive',
            }
          : undefined,
        score: {
          gte: scoreMin ?? undefined,
          lte: scoreMax ?? undefined,
        },
        // Don't show movies with pending images
        coverImage: {
          not: {
            startsWith: 'pending_',
          },
        },
      },
      take,
      skip,
      orderBy: {
        releaseDate: 'desc',
      },
    });
  }

  async findOne(id: number): Promise<Movie> {
    const movie = await this.prismaService.movie.findUnique({
      where: { id },
    });

    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }

    // If the movie is still waiting for an image, don't allow access
    if (movie.coverImage.startsWith('pending_')) {
      throw new BadRequestException('This movie is still being processed');
    }

    return movie;
  }

  async update(
    id: number,
    updateMovieDto: UpdateMovieDto,
    coverImageFile?: any,
  ): Promise<Movie> {
    try {
      const currentMovie = await this.prismaService.movie.findUnique({
        where: { id },
      });

      if (!currentMovie) {
        throw new NotFoundException(`Movie with ID ${id} not found`);
      }

      // Don't allow updates to movies without images
      if (currentMovie.coverImage.startsWith('pending_')) {
        throw new BadRequestException(
          'Cannot update a movie without a cover image. Upload an image first.',
        );
      }

      // Handle upload of new image and deletion of old one, if needed
      let imageUrl: string | undefined = undefined;

      if (coverImageFile) {
        console.log(`Updating image for movie ID: ${id}`);

        // Upload the new image
        imageUrl = await this.storageService.uploadFile(coverImageFile);
        console.log(`New image uploaded. URL: ${imageUrl}`);

        // Delete the old image
        try {
          console.log(`Deleting old image: ${currentMovie.coverImage}`);
          await this.storageService.deleteFile(currentMovie.coverImage);
          console.log('Old image deleted successfully');
        } catch (error) {
          console.error('Failed to delete old image:', error);
          // Don't let deletion error prevent the movie update
        }
      }

      const prismaData = {
        ...updateMovieDto,
        ...(imageUrl && { coverImage: imageUrl }),
        releaseDate: updateMovieDto.releaseDate
          ? new Date(updateMovieDto.releaseDate)
          : undefined,
      };

      const updatedMovie = await this.prismaService.movie.update({
        where: { id },
        data: prismaData,
      });

      if (updateMovieDto.releaseDate) {
        const newReleaseDate = new Date(updateMovieDto.releaseDate);
        const currentDate = new Date();

        if (newReleaseDate > currentDate) {
          await this.emailService.cancelMovieReleaseEmail(id);
          await this.emailService.scheduleMovieReleaseEmail(
            id,
            currentMovie.userId,
            newReleaseDate,
          );
        } else {
          await this.emailService.cancelMovieReleaseEmail(id);
        }
      }

      return updatedMovie;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Movie with ID ${id} not found`);
        }
        if (error.code === 'P2002') {
          throw new ConflictException('Movie title must be unique');
        }
      }
      throw new InternalServerErrorException(
        'Failed to update movie: ' + error.message,
      );
    }
  }

  async remove(id: number): Promise<Movie> {
    try {
      // Get the movie before deleting to get the image reference
      const movie = await this.prismaService.movie.findUnique({
        where: { id },
      });

      if (!movie) {
        throw new NotFoundException(`Movie with ID ${id} not found`);
      }

      // Delete email schedules
      await this.emailService.cancelMovieReleaseEmail(id);

      // Delete the movie from the database
      const deletedMovie = await this.prismaService.movie.delete({
        where: { id },
      });

      // Delete the image from storage (only if it's not a placeholder)
      if (movie.coverImage && !movie.coverImage.startsWith('pending_')) {
        try {
          console.log(`Deleting image for movie ${id}: ${movie.coverImage}`);
          await this.storageService.deleteFile(movie.coverImage);
          console.log(`Image for movie ${id} deleted successfully`);
        } catch (error) {
          console.error('Failed to delete image:', error);
          // Don't let deletion error prevent the operation
        }
      }

      return deletedMovie;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Movie with ID ${id} not found`);
        }
      }
      throw new InternalServerErrorException(
        'Failed to delete movie: ' + error.message,
      );
    }
  }
}
