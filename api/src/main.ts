import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerDocumentOptions, SwaggerModule} from "@nestjs/swagger";
import * as fs from "fs";
import {openApiConfig} from "./config/openapi-config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const document = SwaggerModule.createDocument(app, openApiConfig());
  SwaggerModule.setup('swagger', app, document);
  
  await app.listen(3000);
}
bootstrap();
