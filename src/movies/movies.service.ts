/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  BadRequestException,
  ConflictException,
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

@Injectable()
export class MoviesService {
  constructor(
    private prismaService: PrismaService,
    private emailService: EmailService,
    private storageService: StorageService,
  ) {}

  async create(
    userId: number,
    createMovieDto: CreateMovieDto,
    coverImageFile: any,
  ): Promise<Movie> {
    try {
      // Verificamos novamente se o arquivo de imagem está presente
      if (!coverImageFile) {
        throw new BadRequestException('Cover image file is required');
      }

      // Fazemos o upload do arquivo para o Cloudflare R2
      const coverImageUrl =
        await this.storageService.uploadFile(coverImageFile);

      // Criamos o filme no banco de dados com a URL da imagem
      const movie = await this.prismaService.movie.create({
        data: {
          ...createMovieDto,
          coverImage: coverImageUrl,
          releaseDate: new Date(createMovieDto.releaseDate),
          userId,
        },
      });

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

      // Gerenciar upload de nova imagem e exclusão da antiga, se necessário
      let coverImageUrl: string | undefined = undefined;

      if (coverImageFile) {
        // Upload da nova imagem
        coverImageUrl = await this.storageService.uploadFile(coverImageFile);

        // Excluir a imagem antiga, se ela veio do nosso storage
        if (
          currentMovie.coverImage &&
          (currentMovie.coverImage.includes('r2.cloudflarestorage.com') ||
            currentMovie.coverImage.includes(
              process.env.R2_CDN_DOMAIN as string,
            ))
        ) {
          try {
            await this.storageService.deleteFile(currentMovie.coverImage);
          } catch (error) {
            console.error('Failed to delete old image:', error);
            // Não deixar o erro de exclusão impedir a atualização do filme
          }
        }
      }

      const prismaData = {
        ...updateMovieDto,
        ...(coverImageUrl && { coverImage: coverImageUrl }),
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

  // O restante do código permanece o mesmo

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

    return movie;
  }

  async remove(id: number): Promise<Movie> {
    try {
      // Buscar o filme antes de excluir para obter a URL da imagem
      const movie = await this.prismaService.movie.findUnique({
        where: { id },
      });

      if (!movie) {
        throw new NotFoundException(`Movie with ID ${id} not found`);
      }

      // Excluir os agendamentos de e-mail
      await this.emailService.cancelMovieReleaseEmail(id);

      // Excluir o filme do banco de dados
      const deletedMovie = await this.prismaService.movie.delete({
        where: { id },
      });

      // Excluir a imagem do storage
      if (
        movie.coverImage &&
        (movie.coverImage.includes('r2.cloudflarestorage.com') ||
          movie.coverImage.includes(process.env.R2_CDN_DOMAIN as string))
      ) {
        try {
          await this.storageService.deleteFile(movie.coverImage);
        } catch (error) {
          console.error('Failed to delete image:', error);
          // Não deixar o erro de exclusão impedir a operação
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
