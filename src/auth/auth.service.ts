import { Injectable } from '@nestjs/common';
import { LoginDTO, SignUpDTO } from './dtos/auth';

@Injectable()
export class AuthService {
  signup(body: SignUpDTO) {
    console.log('SIGN UP', { body });

    return body;
  }

  login(body: LoginDTO) {
    console.log('LOG IN', { body });

    return body;
  }
}
