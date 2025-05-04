/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Injectable, Logger } from '@nestjs/common';
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';

// Interface for type safety
interface UploadedFile {
  originalname: string;
  buffer: Buffer;
  mimetype: string;
}

@Injectable()
export class StorageService {
  private s3Client: S3Client;
  private bucketName: string;
  private publicDevUrl: string;
  private readonly logger = new Logger(StorageService.name);

  constructor(private configService: ConfigService) {
    // Get and validate required configurations
    const accessKeyId = this.configService.get<string>('R2_ACCESS_KEY_ID');
    const secretAccessKey = this.configService.get<string>(
      'R2_SECRET_ACCESS_KEY',
    );
    const endpoint = this.configService.get<string>('R2_ENDPOINT');
    this.bucketName = this.configService.get<string>(
      'R2_BUCKET_NAME',
    ) as string;
    this.publicDevUrl = this.configService.get<string>(
      'R2_PUBLIC_DEV_URL',
    ) as string;

    // Check if credentials are set
    if (!accessKeyId || !secretAccessKey || !endpoint || !this.bucketName) {
      throw new Error(
        'R2 configuration is incomplete. Check your environment variables.',
      );
    }

    // Validate that public URL is configured
    if (!this.publicDevUrl) {
      throw new Error(
        'R2_PUBLIC_DEV_URL is not configured. Please set this environment variable.',
      );
    }

    // Configure S3 client for use with Cloudflare R2
    this.s3Client = new S3Client({
      region: 'auto', // For R2, use 'auto'
      endpoint,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    });

    this.logger.log(`R2 Storage configured for bucket: ${this.bucketName}`);
    this.logger.log(`Using public development URL: ${this.publicDevUrl}`);
  }

  /**
   * Check if an object has the required properties to be considered a file
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
   * Upload a file to Cloudflare R2
   * @param file The file to be uploaded
   * @param folder Optional folder to organize files
   * @returns Public URL for the file
   */
  async uploadFile(
    file: any,
    folder: string = 'movie-covers',
  ): Promise<string> {
    // Validate the file
    if (!this.isValidFile(file)) {
      throw new Error('Invalid file format or missing required properties');
    }

    // Generate a unique name for the file to avoid collisions
    const fileExtension = file.originalname.split('.').pop();
    const uniqueFileName = `${folder}/${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 15)}.${fileExtension}`;

    try {
      this.logger.log(`Sending file to R2: ${uniqueFileName}`);

      // Send the file to R2
      const command = new PutObjectCommand({
        Bucket: this.bucketName,
        Key: uniqueFileName,
        Body: file.buffer,
        ContentType: file.mimetype,
        // Set cache control for better performance
        CacheControl: 'public, max-age=31536000',
      });

      await this.s3Client.send(command);
      this.logger.log(`File successfully uploaded: ${uniqueFileName}`);

      // Return the public URL for the file
      const publicUrl = `${this.publicDevUrl}/${uniqueFileName}`;

      this.logger.log(`Public URL generated: ${publicUrl}`);
      return publicUrl;
    } catch (error) {
      this.logger.error(`Error uploading file: ${error.message}`, error.stack);
      throw new Error(`Failed to upload file: ${error.message}`);
    }
  }

  /**
   * Delete a file from Cloudflare R2
   * @param fileUrl URL or path of the file to be deleted
   */
  async deleteFile(fileUrl: string): Promise<void> {
    if (!fileUrl) {
      throw new Error('No file URL provided for deletion');
    }

    try {
      this.logger.log(`Starting deletion of file: ${fileUrl}`);

      // Verify that the URL starts with our public dev URL
      if (!fileUrl.startsWith(this.publicDevUrl)) {
        throw new Error(
          `Invalid file URL format: ${fileUrl}. URL must start with ${this.publicDevUrl}`,
        );
      }

      // Extract the key by removing the public URL prefix
      const key = fileUrl.substring(this.publicDevUrl.length + 1); // +1 to remove the leading slash

      this.logger.log(`Object key to be deleted: ${key}`);

      // Send command to delete the file
      const command = new DeleteObjectCommand({
        Bucket: this.bucketName,
        Key: key,
      });

      await this.s3Client.send(command);
      this.logger.log(`File successfully deleted: ${key}`);
    } catch (error) {
      this.logger.error(
        `Error deleting file ${fileUrl}: ${error.message}`,
        error.stack,
      );
      throw new Error(`Failed to delete file: ${error.message}`);
    }
  }
}
