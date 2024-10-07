import './server';
import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";

const app = express();
app.use(express.json());

createConnection().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}).catch(error => console.log(error));