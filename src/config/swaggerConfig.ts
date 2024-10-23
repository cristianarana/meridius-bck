import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Meridius Api',
      version: '1.0.0',
      description: 'API para gestionar un equipo de fútbol',
      contact: {
        name: 'Cristian Arana',
        email: 'cristianarana767@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor local',
      },
    ],
  },
  apis: [
    './src/modules/**/*.routes.ts', 
    './src/modules/**/*.controllers.ts',], // Asegúrate de que las rutas sean correctas
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export const setupSwagger = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};