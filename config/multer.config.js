import multer from "multer";
import path from "path";

const store = multer({
  storage: multer.diskStorage({}),
  filefilter: (req, file, cb) => {
    const ext = path.extname(file.originalName);
    if (ext !== ".mp4" || ext !== ".mkv" ) {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});
export default store;