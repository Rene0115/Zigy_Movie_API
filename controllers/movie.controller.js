import _ from 'lodash';
import movieService from '../services/movie.services.js';
import { uploadVideo } from '../config/cloudinary.config.js';

class MovieController {
  async addMovie(req, res) {
    if (!('file' in req)) {
      return res.status(400).send({
        success: false,
        message: 'Please attach a file'
      });
    }

    const upload = await uploadVideo(req.file.path);
    console.log(upload);
    return res.status(200).send({
      success: true,
    });
  }


  async allMovies(req, res) {
    const movies = await movieService.getMovies();
    if (_.isEmpty(movies)) {
      return res.status(200).send({
        success: true,
        message: 'No movies were found in the database'
      });
    }
    return res.status(200).send({
      success: true,
      data: movies
    });
  }


  async delete(req, res) {
    const movie = await movieService.deleteMovie(req.params.id);
    if (!movie) {
      return res.status(400).send({
        success: false,
        message: 'Unable to delete movie'
      });
    }
    return res.status(200).send({
      success: true,
      message: 'Movie deleted successfully'
    });
  }
}

export default new MovieController();
