import 'reflect-metadata';
import dotenv from 'dotenv';
import express from 'express';
import { AppDataSource } from './config/data-source';
import playerRouter from './modules/player/player.routes';
import { setupSwagger } from './config/swaggerConfig';

dotenv.config();

const app = express();
const PORT = process.env.API_PORT || 3000;

app.use(express.json());
setupSwagger(app);
//Registrar las rutas de módulos
app.use('/api/players', playerRouter);

async function main() {
    AppDataSource.initialize()
    .then(()=> {
      console.log("Database connection established succesfully");
    })
    .catch((error)=>{
      console.error('Error during data source initialization', error);
    });

     app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  }

  main();