/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import 'express-async-errors';
import express from 'express';
import pino from 'pino';
import middleware from './middlewares/middlewares.js';

const app = express();
const logger = pino();
// logger.info(process.env);
middleware(app);

app.listen(process.env.PORT, () => {
  let port = process.env.PORT;
  if (port == null || port === '') {
    port = 8000;
  }

  logger.info(`Server is running on port ${port}`);
});

export default logger;
