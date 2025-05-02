import { Body, Controller, Post } from '@nestjs/common';
import { LoginDTO, SignUpDTO } from './dtos/auth';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() body: SignUpDTO) {
    this.authService.signup(body);

    return body;
  }

  @Post('login')
  login(@Body() body: LoginDTO) {
    this.authService.login(body);

    return body;
  }
}
