import {
  IsString,
  IsNumber,
  IsArray,
  IsDateString,
  IsUrl,
  Min,
  Max,
  MaxLength,
  IsNotEmpty,
} from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  originalTitle: string;

  @IsNumber()
  @IsNotEmpty()
  popularity: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  voteCount: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(100)
  score: number;

  @IsString()
  @IsNotEmpty()
  tagline: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1000)
  synopsis: string;

  @IsArray()
  @IsNotEmpty()
  @IsString({ each: true })
  genres: string[];

  @IsDateString()
  @IsNotEmpty()
  releaseDate: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  duration: number;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsString()
  @IsNotEmpty()
  language: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  budget: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  revenue: number;

  @IsNumber()
  @IsNotEmpty()
  profit: number;

  @IsUrl()
  @IsNotEmpty()
  trailerUrl: string;
}
