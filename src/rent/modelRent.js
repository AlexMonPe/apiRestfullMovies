import mongoose from "mongoose";
import Users from "../users/modelUsers.js";
import Movies from "../movies/modelMovies.js";

// Schema: Data structure of collection Users
const Schema = new mongoose.Schema({
    idMovie: { type: mongoose.Schema.Types.ObjectId, ref:"Movies", required: true },
    idUser: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    rent_date: { type: Date, default: new Date().toLocaleDateString()},
    return_date: {type: Date, default: new Date().toLocaleDateString()},
    totalPrice: {type: Number, required: true }
});
const Rent = mongoose.model('Rent', Schema);
export default Rent;