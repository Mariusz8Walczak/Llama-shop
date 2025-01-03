
import { DataSource } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'mysql',
                host: '172.30.232.136',
                port: 3310,
                username: 'llama',
                password: 'llamaPassword',
                database: 'llamas',
                synchronize: true,
                logging: true,
                entities: [__dirname + '/src/**/domain/entities/*.entity{.ts,.js}'],
            });

            return dataSource.initialize();
        },
    },
];
