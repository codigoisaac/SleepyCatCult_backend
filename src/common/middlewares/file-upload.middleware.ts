/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-namespace */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as multer from 'multer';

// Certifique-se de que temos as definições de tipos corretas
declare global {
  namespace Express {
    // Estendendo a interface Request para incluir file
    interface Request {
      file?: any;
    }
  }
}

@Injectable()
export class FileUploadMiddleware implements NestMiddleware {
  private upload = multer({
    storage: multer.memoryStorage(),
    limits: {
      fileSize: 5 * 1024 * 1024, // Limitar uploads a 5MB
    },
    fileFilter: (req, file, cb) => {
      // Verificar se o arquivo existe
      if (!file) {
        return cb(new Error('O arquivo de imagem é obrigatório'), false);
      }

      // Aceitar apenas imagens
      if (!file.mimetype.match(/image\/(jpeg|png|jpg|webp|gif)/)) {
        return cb(
          new Error(
            'Somente arquivos de imagem são permitidos! (JPEG, PNG, JPG, WEBP, GIF)',
          ),
          false,
        );
      }

      cb(null, true);
    },
  });

  use(req: Request, res: Response, next: NextFunction) {
    // Somente aplicar o middleware se a rota for para upload de imagem
    if (req.path.match(/\/movies\/\d+\/cover-image$/)) {
      this.upload.single('coverImage')(req, res, (err) => {
        if (err) {
          console.error('Erro no middleware de upload:', err);
          return res.status(400).json({
            message: 'Erro no upload do arquivo',
            error: err.message,
          });
        }

        // Verificar se o arquivo foi fornecido
        if (!req.file) {
          return res.status(400).json({
            message: 'O arquivo de imagem de capa é obrigatório',
            error: 'Nenhum arquivo foi enviado no campo coverImage',
          });
        }

        next();
      });
    }
    // Para outras rotas, apenas continua
    else {
      next();
    }
  }
}
