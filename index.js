import express from "express";
import routerMovies from "./movies/routerMovies.js"; //MOVIES ROUTERS
import routerUsers from "./users/routerUsers.js"; // USERS ROUTERS
import routerRent from "./rent/routerRent.js"; // RENT ROUTERS
import connection from "./config/BD.js"; // CONNECTION OF DB
import morgan from "morgan"; 
import logger from "./lib/winston.js";
import env from "dotenv";

// ENVIRONMENT VARS
env.config();

// CONNECTION DB
connection();
const app = express()
// HOW TO SERVER UP IN EXPRESS
app.listen(process.env.SERVER_PORT,()=> console.info('Server Up at port 3003'));


// PARSE BODY TO JSON TO INTERPRETATE IT
app.use(express.json());
// MORGAN TO SHOW LOGS
app.use(morgan('combined', { stream: logger.stream }));


// ENDPOINTS
app.use('/movies', routerMovies); //ENDPOINT OF MOVIES
app.use('/users', routerUsers); //ENDPOINT OF USERS
app.use('/rent', routerRent); // ENDPOINT OF RENT



