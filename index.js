import express from "express";
import routerMovies from "./movies/routerMovies.js";
import routerUsers from "./users/routerUsers.js"
import connection from "./config/BD.js";

const app = express()

app.use(express.json());

app.listen(3003,()=> console.log('Server Up at port 3003'));

// Connection DB
connection();

app.use('/movies', routerMovies);
app.use('/users', routerUsers);