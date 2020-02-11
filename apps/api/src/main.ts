/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidUnknownValues: true,
      validationError: { target: false }
    })
  );

  // const validationPipe = app.select(AppModule).get(ValidationPipe);
  // This will cause class-validator to use the nestJS module resolution,
  // the fallback option is to spare our self's from importing all the class-validator modules to nestJS
  useContainer(app.select(AppModule), {
    fallback: true,
    fallbackOnErrors: true
  });

  const port = process.env.port || 3333;
  await app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
