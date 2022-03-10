const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    name: String,
    mail: String,
    rol: String,
});
const Model = mongoose.model('Users', Schema);
module.exports = Model;
