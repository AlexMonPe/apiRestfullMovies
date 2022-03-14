import mongoose from "mongoose";
const Schema = new mongoose.Schema({
    name: String,
    mail: String,
    rol: String,
});
const Users = mongoose.model('Users', Schema);
export default Users;
