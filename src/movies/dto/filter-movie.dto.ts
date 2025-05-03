import {
  IsNumber,
  IsString,
  IsDateString,
  IsOptional,
  Min,
  Max,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class FilterMovieDto {
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => (value === undefined ? undefined : Number(value)))
  durationMin?: number;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => (value === undefined ? undefined : Number(value)))
  durationMax?: number;

  @IsDateString()
  @IsOptional()
  releaseDateMin?: string;

  @IsDateString()
  @IsOptional()
  releaseDateMax?: string;

  @IsString()
  @IsOptional()
  title?: string;

  @IsNumber()
  @Min(0)
  @Max(100)
  @IsOptional()
  @Transform(({ value }) => (value === undefined ? undefined : Number(value)))
  scoreMin?: number;

  @IsNumber()
  @Min(0)
  @Max(100)
  @IsOptional()
  @Transform(({ value }) => (value === undefined ? undefined : Number(value)))
  scoreMax?: number;

  @IsNumber()
  @Min(1)
  @IsOptional()
  @Transform(({ value }) => (value === undefined ? undefined : Number(value)))
  paginationPage?: number;

  @IsNumber()
  @Min(1)
  @Max(50)
  @IsOptional()
  @Transform(({ value }) => (value === undefined ? undefined : Number(value)))
  paginationPerPage?: number;
}
