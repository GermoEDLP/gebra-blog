import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initSwagger } from './app.swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Prefijo global de la aplicación
  app.setGlobalPrefix('v1/api');

  //inicializador del Swagger
  initSwagger(app);

  const port = process.env.APP_PORT || 3020;

  // Pipe de validación de los datos de entrada usando Class-Validation y class-transformer
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(port);
}
bootstrap();
