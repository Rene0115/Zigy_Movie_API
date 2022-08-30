/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import { v2 as cloudinary } from 'cloudinary';
import MovieModel from '../models/movie.model.js';
import logger from '../app.js';

class MovieServices {
  async getMovies() {
    const allMovies = await new MovieModel.find();
    return allMovies;
  }

  async saveMovie() {

  }

  async getMovieById() {

  }

  async getMovieByPage() {

  }

  async uploadMovie({ file }) {
    const response = await cloudinary.uploader.upload(file.path, {
      resource_type: 'video',
      folder: 'video'
    });

    const movie = new MovieModel({
      url: response.url,
      name: file.originalname,
      cloudinary_id: response.secure_url
    });

    await movie.save();

    return movie;
  }
}

export default new MovieServices();
