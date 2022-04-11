
import mongoose from 'mongoose';

// Schema: Data structure of collection Movies
const Schema = new mongoose.Schema({
    title: {type: String, required: true} ,
    year: Number,
    genre: String,
    actor: String,
    duration: Number,
    price: {type: mongoose.Schema.Types.Decimal128, required: true },
    image: String,
});
const Movies = mongoose.model('Movies', Schema);
export default Movies;
