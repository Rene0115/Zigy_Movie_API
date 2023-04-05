import 'express-async-errors';
import express from 'express';
import pino from 'pino';
import middleware from './middlewares/middlewares.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const logger = pino();

middleware(app);

app.listen(process.env.PORT, () => {
  let port = process.env.PORT;
  if (port == null || port === '' || port === undefined) {
    port = 8000;
  }

  logger.info(`Server is running on port ${port}`);
});

export default logger;
