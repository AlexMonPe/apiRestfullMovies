const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    title: String,
    year: Number,
    genre: String,
    actor: String,
});
const Movies = mongoose.model('Movies', Schema);
module.exports = Movies;
