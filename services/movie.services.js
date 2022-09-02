/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import { v2 as cloudinary } from 'cloudinary';
import MovieModel from '../models/movie.model.js';

class MovieServices {
  async getMovies() {
    const movies = await MovieModel.find({});
    return movies;
  }

  async getMovieById(id) {
    const movie = await MovieModel.findById({ _id: id });
    return movie;
  }

  async getMovieByPage(data) {
    const movie = await MovieModel.paginate({}, { page: data.page, limit: data.size });
    return movie;
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
