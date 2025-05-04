import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Cron, CronExpression } from '@nestjs/schedule';
import * as nodemailer from 'nodemailer';
import { Movie, User } from '@root/generated/prisma';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private transporter: nodemailer.Transporter;

  constructor(private prismaService: PrismaService) {
    this.initializeTransporter().catch((error) => {
      this.logger.error(
        'Failed to initialize email service',
        error instanceof Error ? error.stack : 'Unknown error',
      );
    });
  }

  private async initializeTransporter() {
    const testAccount = await nodemailer.createTestAccount();

    this.transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    this.logger.log(
      `Email test account created: ${testAccount.user} (view emails at https://ethereal.email)`,
    );
  }

  async scheduleMovieReleaseEmail(
    movieId: number,
    userId: number,
    releaseDate: Date,
  ) {
    try {
      const existingSchedule = await this.prismaService.emailSchedule.findFirst(
        {
          where: {
            movieId,
            userId,
            sent: false,
          },
        },
      );

      if (existingSchedule) {
        return await this.prismaService.emailSchedule.update({
          where: { id: existingSchedule.id },
          data: { scheduledFor: releaseDate },
        });
      }

      return await this.prismaService.emailSchedule.create({
        data: {
          movieId,
          userId,
          scheduledFor: releaseDate,
        },
      });
    } catch (error) {
      this.logger.error(
        `Failed to schedule email for movie ${movieId}`,
        error instanceof Error ? error.stack : 'Unknown error',
      );
      throw error;
    }
  }

  async cancelMovieReleaseEmail(movieId: number) {
    try {
      await this.prismaService.emailSchedule.deleteMany({
        where: {
          movieId,
          sent: false,
        },
      });
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.stack : 'Unknown error';
      this.logger.error(
        `Failed to cancel email for movie ${movieId}`,
        errorMessage,
      );
      throw error;
    }
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async checkAndSendScheduledEmails() {
    this.logger.debug('Checking for emails to send...');

    try {
      const now = new Date();
      const schedulesToProcess =
        await this.prismaService.emailSchedule.findMany({
          where: {
            scheduledFor: {
              lte: now,
            },
            sent: false,
          },
          include: {
            movie: true,
            user: true,
          },
        });

      if (schedulesToProcess.length === 0) {
        return;
      }

      this.logger.log(`Found ${schedulesToProcess.length} email(s) to send`);

      for (const schedule of schedulesToProcess) {
        await this.sendMovieReleaseEmail(schedule);

        await this.prismaService.emailSchedule.update({
          where: { id: schedule.id },
          data: { sent: true },
        });
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.stack : 'Unknown error';
      this.logger.error('Error processing scheduled emails', errorMessage);
    }
  }

  private async sendMovieReleaseEmail(schedule: { movie: Movie; user: User }) {
    const { movie, user } = schedule;

    const mailOptions = {
      from: '"Cubos Movies" <noreply@cubosmovies.com>',
      to: user.email,
      subject: `Lembrete: ${movie.title} estreia hoje!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e50914;">Cubos Movies</h2>
          <h3>Olá ${user.name},</h3>
          <p>O filme <strong>${movie.title}</strong> que você estava aguardando estreia hoje!</p>
          <div style="margin: 20px 0;">
            <img src="${movie.coverImage}" alt="${movie.title}" style="max-width: 100%; border-radius: 8px;" />
          </div>
          <p><strong>Sinopse:</strong> ${movie.synopsis}</p>
          <p><strong>Duração:</strong> ${movie.duration} minutos</p>
          <p>Não perca!</p>
          <p style="margin-top: 30px; font-size: 12px; color: #777;">
            Este é um email automático. Por favor, não responda.
          </p>
        </div>
      `,
    };

    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const info = await this.transporter.sendMail(mailOptions);
      this.logger.log(`Email sent for movie: ${movie.title}`);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      this.logger.debug(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return info;
    } catch (error) {
      this.logger.error(
        `Failed to send email for movie ${movie.id}`,
        error instanceof Error ? error.stack : 'Unknown error',
      );
      throw error;
    }
  }
}
