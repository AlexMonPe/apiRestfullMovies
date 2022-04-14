
import mongoose from 'mongoose';

// Schema: Data structure of collection Movies
const Schema = new mongoose.Schema({
    title: {type: String, required: true} ,
    year: Number,
    genre: String,
    actor: String,
    duration: Number,
    overview: String,
    price: {type: Number, required: true },
    image: String,
    trailer: String
});
const Movies = mongoose.model('Movies', Schema);
export default Movies;
