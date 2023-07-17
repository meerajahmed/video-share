import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 8000,
      },
    },
  );
  app.useGlobalPipes(
    new ValidationPipe({
      //disableErrorMessages: true,
      // whitelist: true,
    }),
  );
  await app.listen();
}
bootstrap();
