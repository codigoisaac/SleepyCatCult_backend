import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [AuthModule, MoviesModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
