import mongoose from "mongoose";

const movieSchema = mongoose.Schema(
  {
    stream_url: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    download_url: {
      required: true,
      type: String,
      default: "empty"
    },
    cloudinary_url: {
      required: true,
      type: String,
    }
  },
  { timestamps: true, versionKey: false }
);

const movieModel = mongoose.model("Movie", movieSchema);

export default movieModel;
