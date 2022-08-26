/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import { v2 as cloudinary } from 'cloudinary';
import MovieModel from '../models/movie.model.js';
import logger from '../app.js';

class MovieServices {
  async getMovies() {

  }

  async saveMovie() {

  }

  async getMovieById() {

  }

  async getMovieByPage() {

  }

  async uploadMovie(req, res) {
    const movie = await cloudinary.uploader.upload(
      req.file.path,
      {
        resource_type: 'video',
        folder: 'video'
      },
      (err, result) => {
        if (err) {
          logger.error(err);
          return res.status(500).send(err);
        }
        const model = new MovieModel({
          url: result.url,
          name: req.file.originalname,
          cloudinary_id: result.public_id
        });
        model.save((error, value) => {
          if (error) {
            logger.error(error);
            return res.status(500).send(error);
          }
          return res.status(200).send(value);
        });
        return { result, movie };
      }
    );
  }
}

export default new MovieServices();
