import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

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

movieSchema.plugin(mongoosePaginate);

const movieModel = mongoose.model('Movie', movieSchema);

export default movieModel;
