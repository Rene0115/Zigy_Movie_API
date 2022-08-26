/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */

import logger from './app.js';

const cloudinaryConfig = cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

const uploader = cloudinary.uploader.upload('/uploads/vlcsnap-2022-07-17-16h08m45s372.png')
  .then((result) => { logger.info(result); })
  .catch((error) => { logger.info(error); });

export default uploader;
