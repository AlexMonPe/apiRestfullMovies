const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    name: String,
    year: Number,
    genre: String,
    actor: String,
});
const Movies = mongoose.model('Movies', Schema);
module.exports = Movies;
