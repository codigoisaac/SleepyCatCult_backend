import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { MoviesModule } from './movies/movies.module';
import { EmailModule } from './email/email.module';
import { StorageModule } from './storage/storage.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    MoviesModule,
    EmailModule,
    StorageModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
