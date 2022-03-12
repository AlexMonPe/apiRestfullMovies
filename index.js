import express from "express";
import routerMovies from "./movies/routerMovies.js";
import routerUsers from "./users/routerUsers.js"
import mongoose from "mongoose"

const app = express()

app.use(express.json());

app.listen(3003,()=> console.log('Server Up at port 3003'))
app.use('/movies', routerMovies);
app.use('/users', routerUsers);

mongoose.connect('mongodb://localhost:27017/Movies', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('Mongoose-Server Up'))
.catch((error)=> console.log(error))
