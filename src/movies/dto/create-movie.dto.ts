// create-movie.dto.ts
import {
  IsString,
  IsNumber,
  IsArray,
  IsDateString,
  IsUrl,
  Min,
  Max,
} from 'class-validator';

export class CreateMovieDto {
  @IsString()
  title: string;

  @IsString()
  originalTitle: string;

  @IsUrl()
  coverImage: string;

  @IsNumber()
  popularity: number;

  @IsNumber()
  @Min(0)
  voteCount: number;

  @IsNumber()
  @Min(0)
  @Max(100)
  score: number;

  @IsString()
  tagline: string;

  @IsString()
  @Max(1000)
  synopsis: string;

  @IsArray()
  @IsString({ each: true })
  genres: string[];

  @IsDateString()
  releaseDate: string;

  @IsNumber()
  @Min(1)
  duration: number;

  @IsString()
  status: string;

  @IsString()
  language: string;

  @IsNumber()
  @Min(0)
  budget: number;

  @IsNumber()
  @Min(0)
  revenue: number;

  @IsNumber()
  profit: number;

  @IsUrl()
  trailerUrl: string;
}
