import { Module } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { ConfigModule } from '@nestjs/config';
import { HttpModule, HttpService } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';

@Module({
    imports: [
        ProductsModule,
        UsersModule,
        HttpModule,
        DatabaseModule,
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
    ],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: 'TASKS',
            useFactory: async (http: HttpService) => {
                const request = http.get(
                    'https://jsonplaceholder.typicode.com/todos',
                );
                const tasks = await lastValueFrom(request);
                return tasks.data;
            },
            inject: [HttpService],
        },
    ],
})
export class AppModule {}
