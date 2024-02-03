import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('NestJS - Sistema de Comentários')
  .setDescription('NestJS - Sistema de Comentários: API para gerenciar e interagir com comentários. Documentação Swagger clara e detalhada para facilitar integração e teste de endpoints.')
  .setVersion('1.0')
  .addTag('Sistema')
  .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
