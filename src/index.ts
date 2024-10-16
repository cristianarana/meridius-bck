import 'reflect-metadata';
import dotenv from 'dotenv';
import express from 'express';
import { AppDataSource } from './config/data-source';

dotenv.config();

const app = express();
const PORT = process.env.API_PORT || 3000;

app.use(express.json());

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