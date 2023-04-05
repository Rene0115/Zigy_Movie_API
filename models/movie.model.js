import mongoose from 'mongoose';

const movieSchema = mongoose.Schema({
  streamUrl: {
    required: true,
    type: String,
    default: "empty"
  },
  name: {
    required: true,
    type: String,
    default: "empty"
  },
  cloudinary_id: {
    required: true,
    type: String,
    default: "empty"
  },
  download_url: {
    required: true,
    type: String,
    default: "empty"
  }
}, { timestamps: true , versionKey: false});


const movieModel = mongoose.model('Movie', movieSchema);

export default movieModel;
