import 'reflect-metadata';
import { createConnection } from 'typeorm';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const PORT = process.env.API_PORT || 3000;

app.use(express.json());

async function main() {
    try {
      // Conectar a la base de datos
      const connection = await createConnection();
      console.log('Conectado a la base de datos');
  
      // Puedes agregar más operaciones aquí si lo deseas
      app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
      });
    } catch (error) {
      console.error('Error al conectar a la base de datos:', error);
    }   
  }

  main();