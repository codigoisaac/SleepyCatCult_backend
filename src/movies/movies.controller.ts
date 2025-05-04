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
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { User } from '@root/generated/prisma';
import { AuthGuard } from '../auth/auth.guard';
import { FilterMovieDto } from './dto/filter-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  // Endpoint 1: Criar apenas os dados do filme (sem imagem)
  @UseGuards(AuthGuard)
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createMovie(
    @Request() request: { user: User },
    @Body() createMovieDto: CreateMovieDto,
  ) {
    const userId = request.user.id;
    console.log('Criando dados do filme:', createMovieDto.title);

    // Cria o filme com um placeholder para a imagem
    const movie = await this.moviesService.createInitial(
      userId,
      createMovieDto,
    );

    return {
      ...movie,
      message: 'Filme criado com sucesso. Faça upload da imagem de capa.',
      uploadEndpoint: `/movies/${movie.id}/cover-image`,
    };
  }

  // Endpoint 2: Fazer upload da imagem para um filme já criado
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

    console.log('Recebendo imagem para o filme ID:', id);

    try {
      // Atualiza o filme com a imagem real
      const updatedMovie = await this.moviesService.uploadCoverImage(
        id,
        request.file,
        request.user.id,
      );

      return {
        ...updatedMovie,
        message: 'Imagem de capa atualizada com sucesso.',
      };
    } catch (error) {
      // Se ocorrer um erro no upload, podemos decidir excluir o filme
      // para evitar um filme sem imagem
      if (error.message.includes('not found') || error.status === 404) {
        throw error; // Se o filme não existe, apenas repassa o erro
      }

      // Se for outro tipo de erro, tenta fazer rollback
      console.error('Erro ao fazer upload de imagem:', error);
      await this.moviesService.remove(id).catch((e) => {
        console.error('Erro ao tentar remover filme após falha no upload:', e);
      });

      throw new BadRequestException(
        'Erro ao fazer upload da imagem. O filme foi removido para manter a consistência dos dados.',
      );
    }
  }

  // exemplos de uso:
  // /movies
  // /movies?title=guerra
  // /movies?durationMin=90&durationMax=180
  // /movies?releaseDateMin=2000-01-01&releaseDateMax=2005-12-31&durationMin=150&title=s
  // /movies?page=2&perPage=10
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
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMovieDto: UpdateMovieDto,
    @Request() request: { file?: any },
  ) {
    // Log para debug
    console.log('Atualizando filme com ID:', id);
    console.log('Arquivo de imagem presente:', request.file ? 'Sim' : 'Não');

    // Verificamos se há pelo menos algo para atualizar (campos ou imagem)
    if (!request.file && Object.keys(updateMovieDto).length === 0) {
      throw new BadRequestException(
        'At least one field to update or a new cover image file is required.',
      );
    }

    return this.moviesService.update(id, updateMovieDto, request.file);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.moviesService.remove(id);
  }
}
