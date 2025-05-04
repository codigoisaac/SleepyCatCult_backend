/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Injectable } from '@nestjs/common';
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';

// Interface para deixar o código mais tipo-seguro
interface UploadedFile {
  originalname: string;
  buffer: Buffer;
  mimetype: string;
}

@Injectable()
export class StorageService {
  private s3Client: S3Client;
  private bucketName: string;
  private cdnDomain: string;

  constructor(private configService: ConfigService) {
    // Obter e validar as configurações necessárias
    const accessKeyId = this.configService.get<string>('R2_ACCESS_KEY_ID');
    const secretAccessKey = this.configService.get<string>(
      'R2_SECRET_ACCESS_KEY',
    );
    const endpoint = this.configService.get<string>('R2_ENDPOINT');
    this.bucketName = this.configService.get<string>(
      'R2_BUCKET_NAME',
    ) as string;
    this.cdnDomain = this.configService.get<string>('R2_CDN_DOMAIN') as string;

    // Verificar se as credenciais estão definidas
    if (!accessKeyId || !secretAccessKey || !endpoint || !this.bucketName) {
      throw new Error(
        'R2 configuration is incomplete. Check your environment variables.',
      );
    }

    // Configurar o cliente S3 para uso com Cloudflare R2
    this.s3Client = new S3Client({
      region: 'auto', // Para R2, use 'auto'
      endpoint,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    });
  }

  /**
   * Verifica se um objeto tem as propriedades necessárias para ser considerado um arquivo
   */
  private isValidFile(file: any): file is UploadedFile {
    return (
      file &&
      typeof file.originalname === 'string' &&
      file.buffer instanceof Buffer &&
      typeof file.mimetype === 'string'
    );
  }

  /**
   * Faz upload de um arquivo para o Cloudflare R2
   * @param file O arquivo a ser enviado
   * @param folder Pasta opcional para organizar arquivos
   * @returns URL pública do arquivo
   */
  async uploadFile(
    file: any,
    folder: string = 'movie-covers',
  ): Promise<string> {
    // Validar o arquivo
    if (!this.isValidFile(file)) {
      throw new Error('Invalid file format or missing required properties');
    }

    // Gerar um nome único para o arquivo para evitar colisões
    const fileExtension = file.originalname.split('.').pop();
    const uniqueFileName = `${folder}/${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 15)}.${fileExtension}`;

    try {
      // Enviar o arquivo para o R2
      // Nota: Cloudflare R2 não suporta ACL da mesma forma que o S3
      // É necessário configurar a política de acesso público no bucket
      const command = new PutObjectCommand({
        Bucket: this.bucketName,
        Key: uniqueFileName,
        Body: file.buffer,
        ContentType: file.mimetype,
      });

      await this.s3Client.send(command);

      // Retornar a URL pública do arquivo
      // Se você tiver um domínio personalizado configurado para seu bucket R2, use-o aqui
      return this.cdnDomain
        ? `https://${this.cdnDomain}/${uniqueFileName}`
        : `https://${this.bucketName}.r2.cloudflarestorage.com/${uniqueFileName}`;
    } catch (error) {
      console.error('Error uploading file to R2:', error);
      throw new Error(`Failed to upload file: ${error.message}`);
    }
  }

  /**
   * Exclui um arquivo do Cloudflare R2
   * @param fileUrl URL do arquivo a ser excluído
   */
  async deleteFile(fileUrl: string): Promise<void> {
    if (!fileUrl) {
      throw new Error('No file URL provided for deletion');
    }

    try {
      // Extrair o caminho do arquivo da URL
      const urlParts = new URL(fileUrl);
      let key: string;

      if (this.cdnDomain && urlParts.hostname === this.cdnDomain) {
        // Se estiver usando domínio personalizado
        key = urlParts.pathname.substring(1); // Remover a barra inicial
      } else if (urlParts.hostname.includes('r2.cloudflarestorage.com')) {
        // Se estiver usando a URL padrão do R2
        key = urlParts.pathname.split('/').slice(2).join('/'); // Remover /bucketname/
      } else {
        throw new Error(`Unsupported URL format: ${fileUrl}`);
      }

      // Enviar comando para excluir o arquivo
      const command = new DeleteObjectCommand({
        Bucket: this.bucketName,
        Key: key,
      });

      await this.s3Client.send(command);
      console.log(`Successfully deleted file: ${key}`);
    } catch (error) {
      console.error(`Error deleting file ${fileUrl}:`, error);
      throw new Error(`Failed to delete file: ${error.message}`);
    }
  }
}
