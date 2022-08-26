/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import _ from 'lodash';
import movieService from '../services/movie.services.js';

class MovieController {
  async addMovie(req, res) {
    const movie = await movieService.uploadMovie();
    if (!movie) {
      return res.status(404).send({
        success: false,
        message: 'something went wrong'
      });
    }
    return res.status(200).send({
      success: true,
      message: 'movie uploaded successfully'
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
