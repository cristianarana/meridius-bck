import { DataSource } from 'typeorm';
import 'dotenv/config';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false, // true si quieres sincronización automática en desarrollo
  logging: true,
  entities: [__dirname + '/**/*.entity.{js,ts}'], // Incluye tus entidades
  migrations: [__dirname + '/migrations/*.{js,ts}'], // Incluye las migraciones
});