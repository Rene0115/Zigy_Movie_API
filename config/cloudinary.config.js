import _cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

const cloudinary = _cloudinary.v2;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

export async function uploadVideo(file) {
  try {
    const response = await cloudinary.uploader.upload(file, {
      resource_type: "video",
      folder: "zigy/videos",
    });

    return response;
  } catch (error) {
    throw new Error(`From Cloudinary: ${error}`);
  }
}

export async function streamVideo(fileId) {
  try {
    const streamingUrl = cloudinary.url(fileId, {
      resource_type: "video",
      streaming_profile: "full_hd",
      secure: true,
    });

    return streamingUrl;
  } catch (err) {
    throw new Error(`From Cloudinary: ${err}`);
  }
}

export async function downloadVideo(fileId) {
  try {
    const downloadUrl = cloudinary.url(fileId, {
      resource_type: "video",
      secure: true,
    });

    return downloadUrl;
  } catch (err) {
    throw new Error(`From Cloudinary: ${err}`);
  }
}
export default {
  uploadVideo,
  downloadVideo,
  streamVideo,
};
