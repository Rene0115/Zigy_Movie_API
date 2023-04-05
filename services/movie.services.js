import movieModel from "../models/movie.model.js";
import MovieModel from "../models/movie.model.js";

class MovieServices {
  async create(data) {
    const movie = await movieModel.create(data);
    return movie;
  }
  async getMovies() {
    const movies = await MovieModel.find({});
    return movies;
  }
}

export default new MovieServices();
