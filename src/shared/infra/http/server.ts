import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';

// Middlewares
import globalErrorHandling from '@shared/infra/http/middlewares/globalErrorHandling';

// Utils
import checkPort from '@shared/utils/validatePort.util';

// Routes
import routes from '@shared/infra/http/routes';

const app = express();

const date = new Date().toLocaleDateString();
const environment = process.env.NODE_ENV.toUpperCase();

// Base Endpoint
const apiPort = checkPort('(SERVER)', +process.env.API_PORT, 3333);
const apiURL = (process.env.API_URL as string) || 'http://localhost';

app.use(express.json());

app.use(routes);

// Captura erros de qualquer rota
app.use(globalErrorHandling);

try {
  app
    .listen(apiPort, '0.0.0.0', () => {
      console.log(
        `[INFO] (SERVER) ${date} Listening at ${apiURL}:${apiPort} in ${environment} mode.`,
      );
    })
    .on('error', error => {
      console.error(`[ERROR] (SERVER) ${date} ${error.message}`);
    });
} catch (error) {
  console.error(`[ERROR] (SERVER) ${date} ${error.code}: ${error.message}`);
}
