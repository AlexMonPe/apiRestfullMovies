import express from "express";
import routerMovies from "./movies/routerMovies.js";
import routerUsers from "./users/routerUsers.js";
import routerRent from "./rent/routerRent.js";
import connection from "./config/BD.js";
import morgan from "morgan";
import logger from "./lib/winston.js";


const app = express()

// Connection DB
connection();
// How to server up in express
app.listen(3003,()=> console.info('Server Up at port 3003'));


// Parse body contents to JSON that can interpretate it.
app.use(express.json());
// Morgan to show logs
app.use(morgan('combined', { stream: logger.stream }));


// Routes defined
app.use('/movies', routerMovies);
app.use('/users', routerUsers);
app.use('/rent', routerRent)
//app.use('/auth', checkjwt);


