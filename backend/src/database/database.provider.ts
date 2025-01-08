import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async (configService: ConfigService): Promise<DataSource> => {
            const dataSource = new DataSource({
                type: 'mysql',
                host: configService.get<string>('MYSQL_HOST', '127.0.0.1'),
                port: configService.get<number>('MYSQL_PORT', 3306),
                username: configService.get<string>('MYSQL_USER', 'root'),
                password: configService.get<string>('MYSQL_PASSWORD', 'password'),
                database: configService.get<string>('MYSQL_DATABASE', 'default_db'),
                synchronize: configService.get<boolean>('DB_SYNCHRONIZE', false),
                logging: configService.get<boolean>('DB_LOGGING', false),
                entities: [__dirname + '/src/**/domain/entities/*.entity{.ts,.js}'],
            });

            return dataSource.initialize();
        },
        inject: [ConfigService],
    },
];
