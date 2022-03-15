import express from "express";
import routerMovies from "./movies/routerMovies.js";
import routerUsers from "./users/routerUsers.js"
import connection from "./config/BD.js";
import morgan from "morgan";
import {auth, checkJwt} from "./config/middlewares.js";


const app = express()

// Connection DB
connection();

// Parse body contents to JSON that can interpretate it.
app.use(express.json());
// Morgan to show logs
app.use(morgan('tiny'));

//Autentication // PASAR A MIDDLEWARE PARA PONERLO EN CUALQUIER ENDPOINT
// app.use("/", autentication)


// How to server up with express
app.listen(3003,()=> console.info('Server Up at port 3003'));


app.use('/auth', checkJwt)

// Routes defined
app.use('/movies', routerMovies);
app.use('/users', routerUsers);
//app.use('/auth', checkjwt);


