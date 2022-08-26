import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const initSwagger = (app: INestApplication) => {
  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Blog GeBra')
    .setDescription('Blog GeBra documentation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api-docs', app, document);
};
