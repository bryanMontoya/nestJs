import { Module, Global } from '@nestjs/common';

const API_KEY = '12345';

@Global()
@Module({
    providers: [
        {
            provide: 'API_KEY',
            useValue: API_KEY,
        },
    ],
    exports: ['API_KEY'],
})
export class DatabaseModule {}
