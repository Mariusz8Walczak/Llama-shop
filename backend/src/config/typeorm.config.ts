import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
config();

const configService = new ConfigService();


const AppDataSource = new DataSource({
    type: 'mysql',
    host: '172.30.232.136',
    port: 3310,
    username: 'llama',
    password: 'llamaPassword',
    database: 'llamas',
    synchronize: false,
    logging: true,
    entities: ['src/**/domain/entities/*.entity{.ts,.js}'],
    migrations: ['src/database/migrations/*-migration.ts'],
    migrationsRun: false
});

export default AppDataSource;