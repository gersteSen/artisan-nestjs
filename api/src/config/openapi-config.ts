import { DocumentBuilder } from '@nestjs/swagger';

export const openApiConfig = () => {
  return new DocumentBuilder()
    .setTitle('Artisan API')
    .setDescription('4 U From Gerste')
    .setVersion('1.0')
    .addTag('Build with ❤️ by Gerste')
    .build();
};
