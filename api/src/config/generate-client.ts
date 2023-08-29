import { NestFactory } from '@nestjs/core';
import { SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import { AppModule } from '../app.module';
import { openApiConfig } from './openapi-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const config = openApiConfig();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey
  };

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.createDocument(app, config);

  fs.writeFileSync('./swagger-spec.json', JSON.stringify(document));
}
bootstrap();
