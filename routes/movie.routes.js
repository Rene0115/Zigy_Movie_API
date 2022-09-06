/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import express from 'express';
import movieController from '../controllers/movie.controller.js';
import store from '../config/multer.config.js';

const movieRouter = express.Router();

movieRouter.post('/uploadVideo', store.single('file'), movieController.addMovie);
movieRouter.get('/byId/:id', movieController.byId);
movieRouter.get('/pages', movieController.paginated);
movieRouter.get('/', movieController.allMovies);
movieRouter.delete('/delete/:id', movieController.delete);
export default movieRouter;
