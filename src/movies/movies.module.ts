import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { EmailModule } from 'src/email/email.module';
import { StorageModule } from 'src/storage/storage.module';
import { FileUploadMiddleware } from 'src/common/middlewares/file-upload.middleware';

@Module({
  imports: [EmailModule, StorageModule],
  controllers: [MoviesController],
  providers: [MoviesService, PrismaService],
})
export class MoviesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FileUploadMiddleware).forRoutes(
      // Rota para upload inicial de imagem
      { path: 'movies/:id/cover-image', method: RequestMethod.POST },
      // Rota para atualizar a imagem
      { path: 'movies/:id/cover-image', method: RequestMethod.PATCH },
    );
  }
}
