import express from "express";
import videoController from "../controllers/video.controller.js";
import store from "../config/multer.config.js";

const videoRouter = express.Router();

videoRouter.post(
  "/uploadvideo",
  store.single("video"),
  videoController.addvideo
);

export default videoRouter;
