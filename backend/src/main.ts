import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const port = process.env.PORT || 4000;

async function bootstrap() {

  const app = await NestFactory.create(AppModule, {cors: true });
  app.setGlobalPrefix("api/v1");

  await app.listen(port);
  Logger.log(`Server running on http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
