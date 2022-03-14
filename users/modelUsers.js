import mongoose from "mongoose";

// Schema: Data structure of collection Users
const Schema = new mongoose.Schema({
    name: String,
    mail: String,
    password: String,
    rol: String,
});
const Users = mongoose.model('Users', Schema);
export default Users;
