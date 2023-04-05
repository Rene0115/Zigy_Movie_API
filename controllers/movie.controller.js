import _ from "lodash";
import movieService from "../services/movie.services.js";
import {
  uploadVideo,
  streamVideo,
  downloadVideo,
} from "../config/cloudinary.config.js";

class MovieController {
  async addMovie(req, res) {
    if (!("file" in req)) {
      return res.status(400).send({
        success: false,
        message: "Please attach a file",
      });
    }

    const upload = await uploadVideo(req.file.path);
    const fileId = upload.public_id;
    const downloadUrl = await downloadVideo(fileId);
    const streamingUrl = await streamVideo(fileId);

    const data = {
      stream_url: streamingUrl,
      download_url: downloadUrl,
      name: upload.original_filename,
    };

    const movie = await movieService.create(data);

    return res.status(200).send({
      success: true,
      data: movie,
    });
  }

  async allMovies(req, res) {
    const movies = await movieService.getMovies();
    if (_.isEmpty(movies)) {
      return res.status(200).send({
        success: true,
        message: "No movies were found in the database",
      });
    }
    return res.status(200).send({
      success: true,
      data: movies,
    });
  }

}

export default new MovieController();
