/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  Logger,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Movie, Prisma } from '@root/generated/prisma';
import { EmailService } from 'src/email/email.service';
import { StorageService } from 'src/storage/storage.service';

// Maximum time (in minutes) a movie can be without an image
const MAX_PENDING_IMAGE_TIME = 1;

@Injectable()
export class MoviesService {
  private readonly logger = new Logger(MoviesService.name);
  private cleanupInterval: NodeJS.Timeout;

  constructor(
    private prismaService: PrismaService,
    private emailService: EmailService,
    private storageService: StorageService,
  ) {
    // Set up periodic cleanup of movies without images
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
          coverImageUrl: `pending_${Date.now()}`,
          releaseDate: new Date(createMovieDto.releaseDate),
          userId,
        },
      });

      this.logger.log(`Created movie ID ${movie.id} with pending image status`);

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
      this.logger.log(`Starting image upload process for movie ID: ${id}`);

      // Check if the movie exists and belongs to the user
      const movie = await this.prismaService.movie.findUnique({
        where: { id },
      });

      if (!movie) {
        this.logger.warn(`Movie ID ${id} not found`);
        throw new NotFoundException(`Movie with ID ${id} not found`);
      }

      if (movie.userId !== userId) {
        this.logger.warn(
          `User ID ${userId} does not have permission to modify movie ID ${id}`,
        );
        throw new ForbiddenException(
          'You do not have permission to modify this movie',
        );
      }

      // Check if the movie is waiting for an image (starts with 'pending_')
      const isPending = movie.coverImageUrl.startsWith('pending_');
      this.logger.log(
        `Movie ID ${id} status: ${isPending ? 'Waiting for image' : 'Already has an image'}`,
      );

      // If not pending, it means it already has an image
      // In that case, we'll delete the old image before uploading a new one
      if (!isPending) {
        try {
          this.logger.log(`Deleting old image: ${movie.coverImageUrl}`);
          await this.storageService.deleteFile(movie.coverImageUrl);
          this.logger.log('Old image deleted successfully');
        } catch (error) {
          this.logger.error('Failed to delete old image:', error);
          // We continue even if deletion fails
        }
      }

      // Upload the new image
      this.logger.log('Starting upload of new image to Cloudflare R2');
      const imageUrl = await this.storageService.uploadFile(coverImageFile);
      this.logger.log(`Upload successful! Image URL: ${imageUrl}`);

      // Update the movie with the URL of the new image
      this.logger.log(`Updating movie ID ${id} record with the new image URL`);
      const updatedMovie = await this.prismaService.movie.update({
        where: { id },
        data: {
          coverImageUrl: imageUrl,
        },
      });

      this.logger.log(
        `✅ Upload process completed successfully for movie ID: ${id} (${movie.title})`,
      );
      return updatedMovie;
    } catch (error) {
      // If there's an error during upload, we don't want to leave the movie without an image
      // The controller will decide if it should delete the movie
      this.logger.error(
        `❌ Error during image upload for movie ID ${id}:`,
        error,
      );
      throw error;
    }
  }

  /**
   * Update only the data of an existing movie (not the image)
   */
  async updateMovieData(
    id: number,
    updateMovieDto: UpdateMovieDto,
    userId: number,
  ): Promise<Movie> {
    try {
      const currentMovie = await this.prismaService.movie.findUnique({
        where: { id },
      });

      if (!currentMovie) {
        throw new NotFoundException(`Movie with ID ${id} not found`);
      }

      // Verify that the movie belongs to the user
      if (currentMovie.userId !== userId) {
        this.logger.warn(
          `User ID ${userId} does not have permission to modify movie ID ${id}`,
        );
        throw new ForbiddenException(
          'You do not have permission to modify this movie',
        );
      }

      // Don't allow updates to movies without images
      if (currentMovie.coverImageUrl.startsWith('pending_')) {
        throw new BadRequestException(
          'Cannot update a movie without a cover image. Upload an image first.',
        );
      }

      this.logger.log(`Updating data for movie ID: ${id}`);

      const prismaData = {
        ...updateMovieDto,
        releaseDate: updateMovieDto.releaseDate
          ? new Date(updateMovieDto.releaseDate)
          : undefined,
      };

      const updatedMovie = await this.prismaService.movie.update({
        where: { id },
        data: prismaData,
      });

      // Update email schedules if release date changed
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

      this.logger.log(`✅ Data updated successfully for movie ID: ${id}`);
      return updatedMovie;
    } catch (error) {
      this.logger.error(
        `❌ Error during movie data update for movie ID ${id}:`,
        error,
      );
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Movie with ID ${id} not found`);
        }
        if (error.code === 'P2002') {
          throw new ConflictException('Movie title must be unique');
        }
      }
      throw new InternalServerErrorException(
        'Failed to update movie data: ' + error.message,
      );
    }
  }

  /**
   * Update only the cover image of an existing movie
   */
  async updateCoverImage(
    id: number,
    coverImageFile: any,
    userId: number,
  ): Promise<Movie> {
    try {
      this.logger.log(`Starting cover image update for movie ID: ${id}`);

      // Check if the movie exists and belongs to the user
      const movie = await this.prismaService.movie.findUnique({
        where: { id },
      });

      if (!movie) {
        this.logger.warn(`Movie ID ${id} not found`);
        throw new NotFoundException(`Movie with ID ${id} not found`);
      }

      if (movie.userId !== userId) {
        this.logger.warn(
          `User ID ${userId} does not have permission to modify movie ID ${id}`,
        );
        throw new ForbiddenException(
          'You do not have permission to modify this movie',
        );
      }

      // Don't allow updates to movies without proper images
      if (movie.coverImageUrl.startsWith('pending_')) {
        throw new BadRequestException(
          'Cannot update image of a movie that is still waiting for its initial image. Use the upload endpoint instead.',
        );
      }

      // Delete the old image
      try {
        this.logger.log(`Deleting old image: ${movie.coverImageUrl}`);
        await this.storageService.deleteFile(movie.coverImageUrl);
        this.logger.log('Old image deleted successfully');
      } catch (error) {
        this.logger.error('Failed to delete old image:', error);
        // We continue even if deletion fails
      }

      // Upload the new image
      this.logger.log('Starting upload of new image to Cloudflare R2');
      const imageUrl = await this.storageService.uploadFile(coverImageFile);
      this.logger.log(`Upload successful! Image URL: ${imageUrl}`);

      // Update the movie with the URL of the new image
      this.logger.log(`Updating movie ID ${id} record with the new image URL`);
      const updatedMovie = await this.prismaService.movie.update({
        where: { id },
        data: {
          coverImageUrl: imageUrl,
        },
      });

      this.logger.log(
        `✅ Cover image updated successfully for movie ID: ${id} (${movie.title})`,
      );
      return updatedMovie;
    } catch (error) {
      this.logger.error(
        `❌ Error during cover image update for movie ID ${id}:`,
        error,
      );
      throw error;
    }
  }

  private setupCleanupJob() {
    // Run cleanup every minute
    const checkIntervalMs = 60 * 1000;

    this.logger.log(
      `Setting up cleanup job to run every ${checkIntervalMs / 1000} seconds`,
    );
    this.logger.log(
      `Movies without images will be removed after ${MAX_PENDING_IMAGE_TIME} minutes`,
    );

    this.cleanupInterval = setInterval(async () => {
      try {
        this.logger.debug('Running cleanup job for pending movies');
        const now = Date.now();

        const pendingMovies = await this.prismaService.movie.findMany({
          where: {
            coverImageUrl: {
              startsWith: 'pending_',
            },
          },
        });

        if (pendingMovies.length > 0) {
          this.logger.debug(`Found ${pendingMovies.length} pending movies`);
        } else {
          this.logger.debug('No pending movies found');
          return;
        }

        const expiredMovies: { id: number; title: string; age: string }[] = [];
        const activeMovies: { id: number; title: string; age: string }[] = [];

        // First pass: categorize movies as expired or still active
        for (const movie of pendingMovies) {
          const timestamp = parseInt(
            movie.coverImageUrl.replace('pending_', ''),
            10,
          );
          const ageInMinutes = (now - timestamp) / (60 * 1000);

          if (now - timestamp > MAX_PENDING_IMAGE_TIME * 60 * 1000) {
            expiredMovies.push({
              id: movie.id,
              title: movie.title,
              age: ageInMinutes.toFixed(2),
            });
          } else {
            activeMovies.push({
              id: movie.id,
              title: movie.title,
              age: ageInMinutes.toFixed(2),
            });
          }
        }

        // Log summary of active movies
        if (activeMovies.length > 0) {
          this.logger.debug(
            `${activeMovies.length} movies are still within allowed time: ` +
              activeMovies
                .map((m) => `ID ${m.id} (${m.age} minutes)`)
                .join(', '),
          );
        }

        // Process and log expired movies
        if (expiredMovies.length > 0) {
          this.logger.warn(
            `Found ${expiredMovies.length} expired movies to remove: ` +
              expiredMovies
                .map((m) => `ID ${m.id} (${m.age} minutes)`)
                .join(', '),
          );

          let successCount = 0;
          let failCount = 0;

          // Second pass: remove expired movies
          for (const movie of expiredMovies) {
            try {
              await this.remove(movie.id);
              successCount++;
              this.logger.log(`Removed expired movie ID ${movie.id}`);
            } catch (movieError) {
              failCount++;
              this.logger.error(
                `Failed to remove expired movie ID ${movie.id}:`,
                movieError,
              );
            }
          }

          // Log summary of cleanup action
          this.logger.log(
            `Cleanup complete: Successfully removed ${successCount} expired movies` +
              (failCount > 0 ? `, failed to remove ${failCount} movies` : ''),
          );
        } else {
          this.logger.debug('No expired pending movies to remove');
        }
      } catch (error) {
        this.logger.error('Error in cleanup job:', error);
      }
    }, checkIntervalMs);

    this.logger.log('Cleanup job scheduled successfully');
  }

  // This method is important for proper cleanup when the application shuts down
  onModuleDestroy() {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
      this.logger.log('Cleanup job stopped');
    }
  }

  async findAll({
    durationMin,
    durationMax,
    releaseDateMin,
    releaseDateMax,
    search,
    scoreMin,
    scoreMax,
    paginationPage = 1,
    paginationPerPage = 12,
  }: {
    durationMin?: number;
    durationMax?: number;
    releaseDateMin?: string;
    releaseDateMax?: string;
    search?: string;
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
        ...(search
          ? {
              OR: [
                {
                  title: {
                    contains: search,
                    mode: 'insensitive',
                  },
                },
                {
                  originalTitle: {
                    contains: search,
                    mode: 'insensitive',
                  },
                },
                {
                  tagline: {
                    contains: search,
                    mode: 'insensitive',
                  },
                },
                {
                  synopsis: {
                    contains: search,
                    mode: 'insensitive',
                  },
                },
                {
                  genres: {
                    has: search, // This searches for an exact match in the genres array
                  },
                },
              ],
            }
          : {}),
        score: {
          gte: scoreMin ?? undefined,
          lte: scoreMax ?? undefined,
        },
        // Don't show movies with pending images
        coverImageUrl: {
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
    if (movie.coverImageUrl.startsWith('pending_')) {
      throw new BadRequestException('This movie is still being processed');
    }

    return movie;
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
      if (movie.coverImageUrl && !movie.coverImageUrl.startsWith('pending_')) {
        try {
          this.logger.log(
            `Deleting image for movie ${id}: ${movie.coverImageUrl}`,
          );
          await this.storageService.deleteFile(movie.coverImageUrl);
          this.logger.log(`Image for movie ${id} deleted successfully`);
        } catch (error) {
          this.logger.error('Failed to delete image:', error);
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
