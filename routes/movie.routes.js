/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import express from 'express';
import movieController from '../controllers/movie.controller.js';
import store from '../config/multer.config.js';

const movieRouter = express.Router();

movieRouter.post('/uploadVideo', store.single('file'), movieController.addMovie);

export default movieRouter;
