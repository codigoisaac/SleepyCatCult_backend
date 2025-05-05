/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Query,
  ParseIntPipe,
  BadRequestException,
  HttpCode,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { User } from '@root/generated/prisma';
import { AuthGuard } from '../auth/auth.guard';
import { FilterMovieDto } from './dto/filter-movie.dto';

@Controller('movies')
export class MoviesController {
  private readonly logger = new Logger(MoviesController.name);
  constructor(private readonly moviesService: MoviesService) {}

  @UseGuards(AuthGuard)
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createMovie(
    @Request() request: { user: User },
    @Body() createMovieDto: CreateMovieDto,
  ) {
    const userId = request.user.id;
    this.logger.log(`Creating movie data: ${createMovieDto.title}`);

    const movie = await this.moviesService.createInitial(
      userId,
      createMovieDto,
    );

    return {
      ...movie,
      message: 'Movie created successfully. Upload a cover image.',
      uploadEndpoint: `/movies/${movie.id}/cover-image`,
    };
  }

  @UseGuards(AuthGuard)
  @Post(':id/cover-image')
  @HttpCode(HttpStatus.OK)
  async uploadCoverImage(
    @Param('id', ParseIntPipe) id: number,
    @Request() request: { user: User; file?: any },
  ) {
    if (!request.file) {
      throw new BadRequestException(
        'Cover image file is required. Please upload an image file using multipart/form-data.',
      );
    }

    this.logger.log(`Receiving image for movie ID: ${id}`);

    try {
      const updatedMovie = await this.moviesService.uploadCoverImage(
        id,
        request.file,
        request.user.id,
      );

      return {
        ...updatedMovie,
        message: 'Cover image updated successfully.',
      };
    } catch (error) {
      if (error.message?.includes('not found') || error.status === 404) {
        throw error;
      }

      this.logger.error('Error uploading image:', error);
      await this.moviesService.remove(id).catch((e) => {
        this.logger.error(
          'Error trying to remove movie after upload failure:',
          e,
        );
      });

      throw new BadRequestException(
        'Error uploading image. The movie was removed to maintain data consistency.',
      );
    }
  }

  @UseGuards(AuthGuard)
  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  findAll(@Query() filterDto: FilterMovieDto) {
    return this.moviesService.findAll({
      ...filterDto,
    });
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.moviesService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateMovie(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMovieDto: UpdateMovieDto,
    @Request() request: { user: User },
  ) {
    if (Object.keys(updateMovieDto).length === 0) {
      throw new BadRequestException(
        'At least one field to update is required.',
      );
    }

    this.logger.log(`Updating data for movie ID: ${id}`);
    return this.moviesService.updateMovieData(
      id,
      updateMovieDto,
      request.user.id,
    );
  }

  @UseGuards(AuthGuard)
  @Patch(':id/cover-image')
  @HttpCode(HttpStatus.OK)
  async updateCoverImage(
    @Param('id', ParseIntPipe) id: number,
    @Request() request: { user: User; file?: any },
  ) {
    if (!request.file) {
      throw new BadRequestException(
        'Cover image file is required. Please upload an image file using multipart/form-data.',
      );
    }

    this.logger.log(`Updating image for movie ID: ${id}`);

    try {
      const updatedMovie = await this.moviesService.updateCoverImage(
        id,
        request.file,
        request.user.id,
      );

      return {
        ...updatedMovie,
        message: 'Cover image updated successfully.',
      };
    } catch (error) {
      this.logger.error(`Error updating image for movie ${id}:`, error);
      throw new BadRequestException(
        `Failed to update cover image: ${error.message}`,
      );
    }
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.moviesService.remove(id);
  }
}
