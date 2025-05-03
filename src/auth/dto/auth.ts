import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Match } from './match.decorator';

export class SignUpDTO {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  name: string;

  @IsEmail()
  email: string;

  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    {
      message:
        'The password must be at least 8 characters long, containing at least 1 uppercase character, 1 lowercase, 1 number, and 1 symbol.',
    },
  )
  password: string;

  @Match('password', { message: 'Passwords do not match' })
  passwordConfirm: string;
}

export class LogInDTO {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
