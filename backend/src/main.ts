import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar CORS para o frontend
  app.enableCors({
    origin: 'http://localhost:5173', // Porta do frontend React
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // Configurar validação global
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Remove propriedades não decoradas
    transform: true, // Transforma payload para DTO
    forbidNonWhitelisted: true, // Rejeita propriedades não decoradas
  }));

  // Prefixo global para todas as rotas
  app.setGlobalPrefix('api');

  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();
