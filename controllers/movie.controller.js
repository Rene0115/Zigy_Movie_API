/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import _ from 'lodash';
import { v2 as cloudinary } from 'cloudinary';
import movieService from '../services/movie.services.js';
import logger from '../app.js';

class MovieController {
  async addMovie(req, res) {
    if (!('file' in req)) {
      return res.status(400).send({
        success: false,
        message: 'Please attached a file'
      });
    }

    const newMovieData = {
      file: req.file
    };

    const movies = await movieService.uploadMovie(newMovieData);
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
    const { id } = req.query;
    if (id) {
      const movie = await movieService.getMovieById(id);
      if (!movie) {
        return res.status(400).send({
          success: false,
          message: 'id does not exist in the database'
        });
      }

      return res.status(200).send({
        success: true,
        body: movie
      });
    }
    const movie = await movieService.getMovies();
    if (_.isEmpty(movie)) {
      return res.status(200).send({
        success: true,
        message: 'no movies exist in the database'
      });
    }
    return res.status(200).send({
      success: true,
      data: movie
    });
  }

  async getMoviesInPage(req, res) {
    const movie = await movieService.getMovieByPage();
  }
}
export default new MovieController();
