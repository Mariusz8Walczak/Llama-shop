import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

const configService = new ConfigService();

const AppDataSource = new DataSource({
    type: 'mysql',
    host: configService.get<string>('MYSQL_HOST', '127.0.0.1'),
    port: configService.get<number>('MYSQL_PORT', 3306),
    username: configService.get<string>('MYSQL_USER', 'root'),
    password: configService.get<string>('MYSQL_PASSWORD', 'password'),
    database: configService.get<string>('MYSQL_DATABASE', 'default_db'),
    synchronize: configService.get<boolean>('DB_SYNCHRONIZE', false),
    logging: configService.get<boolean>('DB_LOGGING', false),
    entities: ['src/**/domain/entities/*.entity{.ts,.js}'],
    migrations: ['src/database/migrations/*-migration.ts'],
    migrationsRun: configService.get<boolean>('MIGRATIONS_RUN', false),
});

export default AppDataSource;
