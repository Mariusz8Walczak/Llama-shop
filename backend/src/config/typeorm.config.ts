import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config(); // Ładuje zmienne środowiskowe z pliku .env

const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.MYSQL_HOST || '127.0.0.1',
    port: parseInt(process.env.MYSQL_PORT, 10) || 3306,
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DATABASE || 'default_db',
    synchronize: process.env.DB_SYNCHRONIZE === 'true',
    logging: process.env.DB_LOGGING === 'true',
    entities: ['src/**/domain/entities/*.entity.{ts,js}'],
    migrations: ['src/database/migrations/*.ts'],
    migrationsRun: process.env.MIGRATIONS_RUN === 'true',
});

export default AppDataSource;
