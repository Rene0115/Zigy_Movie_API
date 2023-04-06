import "express-async-errors";
import express from "express";
import pino from "pino";
import middleware from "./middlewares/middlewares.js";
import dotenv from "dotenv";
import database from "./config/db.config.js";
dotenv.config();

const app = express();
const logger = pino();

middleware(app);
const port = process.env.PORT || 5001;

const start = async () => {
  try {
    database();
    app.listen(port, () => logger.info(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();

export default logger;
