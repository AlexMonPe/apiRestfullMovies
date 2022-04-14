import mongoose from "mongoose";
import Users from "../users/modelUsers.js";
import Movies from "../movies/modelMovies.js";

const addDaysToDate = (date, days) =>{
    date.setDate(date.getDate() + days);
    const dateFormated = date.toLocaleDateString()
    return dateFormated;
}

const today= new Date()
const date = addDaysToDate(today,3)

// Schema: Data structure of collection Users
const Schema = new mongoose.Schema({
    idMovie: { type: mongoose.Schema.Types.ObjectId, ref:"Movies", required: true },
    idUser: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    rent_date: { type: String, default: new Date().toLocaleDateString()},
    return_date: {type: String, default: date},
    totalPrice: Number,
});
const Rent = mongoose.model('Rent', Schema);
export default Rent;