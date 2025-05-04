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

  @UseGuards(AuthGuard)
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(
    @Request() request: { user: User; file?: any },
    @Body() createMovieDto: CreateMovieDto,
  ) {
    const userId = request.user.id;

    // Verificar obrigatoriamente a presença do arquivo de imagem
    if (!request.file) {
      throw new BadRequestException(
        'Cover image file is required. Please upload an image file using multipart/form-data.',
      );
    }

    console.log(
      'Criando filme:',
      createMovieDto.title,
      'com imagem:',
      request.file ? 'Arquivo enviado' : 'Sem arquivo (erro)',
    );

    return this.moviesService.create(userId, createMovieDto, request.file);
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
