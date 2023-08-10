import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true, //Ignora del payload atributos que no esten en el dto.
            forbidNonWhitelisted: true, //Alerta cuando se mandan atributos de mas en el dto.
        }),
    ); //Se agrega pipe para validat dtos
    await app.listen(PORT);
}
bootstrap();
