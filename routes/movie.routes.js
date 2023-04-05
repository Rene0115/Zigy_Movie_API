import express from "express";
import movieController from "../controllers/movie.controller.js";
import store from "../config/multer.config.js";

const movieRouter = express.Router();

movieRouter.post(
  "/uploadvideo",
  store.single("video"),
  movieController.addMovie
);
movieRouter.get("/", movieController.allMovies);
export default movieRouter;
