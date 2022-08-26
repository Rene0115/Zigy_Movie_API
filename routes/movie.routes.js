/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import express from 'express';
import movieController from '../controllers/movie.controller.js';

const movieRouter = express.Router();

movieRouter.post('/upload', movieController.addMovie);

export default movieRouter;
