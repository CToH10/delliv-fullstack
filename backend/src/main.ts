import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true }),
    new ValidationPipe({
      transform: true,
      transformOptions: {
        groups: ['transform'],
      },
    }),
  );

  const nestConfig = new DocumentBuilder()
    .setTitle('Delliv API')
    .setDescription(
      'Delivery services API developed for full stack technical test',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, nestConfig);

  SwaggerModule.setup('docs', app, document);

  await app.listen(3001);
}
bootstrap();
