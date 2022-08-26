/* eslint-disable import/prefer-default-export */
import multer from 'multer';

const store = multer.diskStorage({
  storage: multer.diskStorage({}),
  filefilter: (req, file, cb) => {
    const ext = path.extname(file.originalName);
    if (ext !== 'mp4' || ext !== '.mkv') {
      cb(new Error('File type is not supported'), false);
    }
    cb(null, true);
  }

});

export default store;
