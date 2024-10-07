import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { initializeDatabase } from './config/database'; // Inicialización de la DB
import dotenv from 'dotenv';

// Cargar las variables de entorno
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Rutas


// Arrancar el servidor
const startServer = async () => {
  try {

    await initializeDatabase();

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
  }
};

startServer();