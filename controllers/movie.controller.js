/* eslint-disable class-methods-use-this */
import movieService from '../services/movie.services';

class MovieController {
  async addMovie(req, res) {
    const movie = await movieService.uploadMovie();
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
