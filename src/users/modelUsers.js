import mongoose from "mongoose";


// Schema: Data structure of collection Users
const Schema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    password: String,
    role: {type: String, default: "client"}
});
const Users = mongoose.model('Users', Schema);
export default Users;
