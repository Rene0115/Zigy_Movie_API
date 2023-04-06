import _ from "lodash";
import videoService from "../services/video.services.js";
import {
  uploadVideo,
  streamVideo,
  downloadVideo
} from "../config/cloudinary.config.js";

class VideoController {
  async addvideo(req, res) {
    if (!("file" in req)) {
      return res.status(400).send({
        success: false,
        message: "Please attach a file"
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
      cloudinary_url: upload.url
    };

    const video = await videoService.create(data);

    return res.status(200).send({
      success: true,
      data: video
    });
  }

}

export default new VideoController();
