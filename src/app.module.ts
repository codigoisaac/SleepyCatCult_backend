import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { MoviesModule } from './movies/movies.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [AuthModule, MoviesModule, EmailModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
