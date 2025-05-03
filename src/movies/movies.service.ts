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

@Injectable()
export class MoviesService {
  constructor(private prismaService: PrismaService) {}

  async create(userId: number, createMovieDto: CreateMovieDto): Promise<Movie> {
    try {
      return await this.prismaService.movie.create({
        data: {
          ...createMovieDto,
          releaseDate: new Date(createMovieDto.releaseDate),
          userId,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException('Movie title must be unique');
        }
      }
      throw new InternalServerErrorException('Failed to create movie');
    }
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

  async update(id: number, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    const hasValidFields = Object.values(updateMovieDto).some(
      (value) => value !== undefined,
    );

    if (!hasValidFields) {
      throw new BadRequestException(
        'At least one valid field must be provided for update.',
      );
    }

    try {
      const prismaData = {
        ...updateMovieDto,
        releaseDate: updateMovieDto.releaseDate
          ? new Date(updateMovieDto.releaseDate)
          : undefined,
      };

      return await this.prismaService.movie.update({
        where: { id },
        data: prismaData,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Movie with ID ${id} not found`);
        }
        if (error.code === 'P2002') {
          throw new ConflictException('Movie title must be unique');
        }
      }
      throw new InternalServerErrorException('Failed to update movie');
    }
  }

  async remove(id: number): Promise<Movie> {
    try {
      return await this.prismaService.movie.delete({
        where: { id },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Movie with ID ${id} not found`);
        }
      }
      throw new InternalServerErrorException('Failed to delete movie');
    }
  }
}
