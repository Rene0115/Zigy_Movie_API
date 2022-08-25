import mongoose from 'mongoose';

const movieSchema = mongoose.Schema({
  link: {
    required: true,
    type: String
  },
  title: {
    required: true,
    type: String
  },
  cloudinaryId: {
    required: true,
    type: String
  }
}, { timestamps: true });

const movieModel = mongoose.model('Movie', movieSchema);

export default movieModel;
