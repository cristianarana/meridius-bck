import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: String(process.env.DB_PASSWORD),
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: [],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
});

// Inicializar la conexión con la base de datos
export const initializeDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Base de datos conectada correctamente.');
  } catch (error) {
    console.error('Error al conectar con la base de datos', error);
  }
};