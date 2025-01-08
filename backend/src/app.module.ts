import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SampleModule } from './sample/sample.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        SampleModule,
        ConfigModule.forRoot({
            isGlobal: true, // ConfigService dostępny globalnie
        }),
        DatabaseModule,
        MongooseModule.forRootAsync({
            imports: [ConfigModule], // Wstrzykujemy ConfigModule
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>('MONGODB_URI', 'mongodb://127.0.0.1:27017/llamas'), // Domyślny URI
            }),
            inject: [ConfigService], // Wstrzyknięcie ConfigService
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
