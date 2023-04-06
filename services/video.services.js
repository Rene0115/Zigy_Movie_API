import movieModel from "../models/video.model.js";
import MovieModel from "../models/video.model.js";

class MovieServices {
  async create(data) {
    const movie = await movieModel.create(data);
    return movie;
  }
}

export default new MovieServices();
