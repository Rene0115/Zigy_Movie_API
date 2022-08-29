import mongoose from 'mongoose';

const movieSchema = mongoose.Schema({
  url: {
    required: true,
    type: String
  },
  name: {
    required: true,
    type: String
  },
  cloudinary_id: {
    required: true,
    type: String
  }
}, { timestamps: true });

const movieModel = mongoose.model('Movie', movieSchema);

export default movieModel;
