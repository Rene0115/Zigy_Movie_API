/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import _ from 'lodash';
import { v2 as cloudinary } from 'cloudinary';
import movieService from '../services/movie.services.js';
import logger from '../app.js';

class MovieController {
  async addMovie(req, res) {
    const movies = await movieService.uploadMovie(req, res);
    if (!movies) {
      return res.status(400).send({
        success: false,
        message: 'Upload failed check error message'
      });
    }
    return res.status(200).send({
      success: true,
      body: movies
    });
  }

  async allMovies(req, res) {
    const movie = await movieService.getMovies();
  }

  async findMovieById(req, res) {
    const movie = await movieService.getMovieById(req.params.id);
  }

  async getMoviesInPage(req, res) {
    const movie = await movieService.getMovieByPage();
  }
}
export default new MovieController();
