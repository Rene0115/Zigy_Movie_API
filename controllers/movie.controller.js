/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import _ from 'lodash';
import movieService from '../services/movie.services.js';

class MovieController {
  async addMovie(req, res) {
    if (!('file' in req)) {
      return res.status(400).send({
        success: false,
        message: 'Please attach a file'
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

  async paginated(req, res) {
    if (!(req.query?.page && req.query?.size)) {
      const movies = await movieService.getMovies();
      if (!movies) {
        return res.status(400).send({
          success: false,
          message: 'no movies exist in the database'
        });
      }
    }
    const page = req.query?.page;
    const size = req.query?.size;
    const data = { page, size };
    const movie = await movieService.getMovieByPage(data);
    if (!movie) {
      return res.status(400).send({
        success: false,
        message: 'no movie exist in the database'
      });
    }
    return res.status(200).send({
      success: true,
      data: movie
    });
  }
}

export default new MovieController();
