import mongoose from "mongoose";


// Schema: Data structure of collection Users
const Schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {type: String, default: "client"}
});
const Users = mongoose.model('Users', Schema);
export default Users;
