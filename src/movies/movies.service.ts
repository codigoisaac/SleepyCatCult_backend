/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable no-useless-catch */
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

// Tempo máximo (em minutos) que um filme pode ficar sem imagem
const MAX_PENDING_IMAGE_TIME = 30;

@Injectable()
export class MoviesService {
  constructor(
    private prismaService: PrismaService,
    private emailService: EmailService,
    private storageService: StorageService,
  ) {
    // Configurar limpeza periódica de filmes sem imagem (opcional)
    this.setupCleanupJob();
  }

  /**
   * Etapa 1: Criar filme inicial com dados básicos, mas sem imagem ainda
   */
  async createInitial(
    userId: number,
    createMovieDto: CreateMovieDto,
  ): Promise<Movie> {
    try {
      // Criar o filme com um placeholder para a imagem
      // Usamos um timestamp para saber quando o filme foi criado sem imagem
      const movie = await this.prismaService.movie.create({
        data: {
          ...createMovieDto,
          // Definimos um marcador para identificar que este filme está aguardando imagem
          coverImage: `pending_${Date.now()}`,
          releaseDate: new Date(createMovieDto.releaseDate),
          userId,
        },
      });

      // Agendar e-mail de lançamento, se aplicável
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
   * Etapa 2: Fazer upload da imagem para um filme existente
   */
  async uploadCoverImage(
    id: number,
    coverImageFile: any,
    userId: number,
  ): Promise<Movie> {
    try {
      // Verificar se o filme existe e pertence ao usuário
      const movie = await this.prismaService.movie.findUnique({
        where: { id },
      });

      if (!movie) {
        throw new NotFoundException(`Movie with ID ${id} not found`);
      }

      if (movie.userId !== userId) {
        throw new ForbiddenException(
          'You do not have permission to modify this movie',
        );
      }

      // Verificar se o filme está aguardando imagem (começa com 'pending_')
      const isPending = movie.coverImage.startsWith('pending_');

      // Se não estiver pendente, significa que já tem uma imagem
      // Nesse caso, vamos excluir a imagem antiga antes de fazer upload da nova
      if (
        !isPending &&
        (movie.coverImage.includes('r2.cloudflarestorage.com') ||
          movie.coverImage.includes(process.env.R2_CDN_DOMAIN as string))
      ) {
        try {
          await this.storageService.deleteFile(movie.coverImage);
        } catch (error) {
          console.error('Failed to delete old image:', error);
          // Continuamos mesmo se a exclusão falhar
        }
      }

      // Fazer upload da nova imagem
      const coverImageUrl =
        await this.storageService.uploadFile(coverImageFile);

      // Atualizar o filme com a URL da nova imagem
      const updatedMovie = await this.prismaService.movie.update({
        where: { id },
        data: {
          coverImage: coverImageUrl,
        },
      });

      return updatedMovie;
    } catch (error) {
      // Se ocorrer um erro durante o upload, não queremos deixar o filme sem imagem
      // O controller decidirá se deve excluir o filme
      throw error;
    }
  }

  /**
   * Função que verifica e limpa filmes pendentes antigos
   * Isso evita que filmes fiquem sem imagem permanentemente
   */
  private setupCleanupJob() {
    // Executar a limpeza a cada 10 minutos
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
            // Extrair o timestamp do placeholder
            const timestamp = parseInt(
              movie.coverImage.replace('pending_', ''),
              10,
            );

            // Verificar se passou o tempo máximo permitido
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
    ); // 10 minutos
  }

  // O resto do código permanece o mesmo...

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
        // Não mostrar filmes com imagem pendente
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

    // Se o filme ainda estiver aguardando imagem, não permitir acesso
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

      // Não permitir atualização de filmes sem imagem
      if (currentMovie.coverImage.startsWith('pending_')) {
        throw new BadRequestException(
          'Cannot update a movie without a cover image. Upload an image first.',
        );
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

      // Excluir a imagem do storage (somente se não for um placeholder)
      if (
        movie.coverImage &&
        !movie.coverImage.startsWith('pending_') &&
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
