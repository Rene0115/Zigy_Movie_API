/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import { v2 as cloudinary } from 'cloudinary';
import movieModel from '../models/movie.model.js';
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

  async uploadMovie() {
    const uploader = cloudinary.uploader.upload('/Documents/APIs/Movie_API/uploads/vlcsnap-2022-07-17-16h08m45s372.png')
      .then((result) => { logger.info(result); })
      .catch((error) => { logger.info(error); });

    return uploader;
  }
}

export default new MovieServices();
