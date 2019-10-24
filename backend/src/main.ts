import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // if (!configService.isProduction()) {
  const options = new DocumentBuilder()
    .setTitle('Journal example')
    .setDescription('The journal API description')
    .setVersion('1.0')
    .addTag('journal')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  // }

  await app.listen(3000);
}
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
bootstrap();
