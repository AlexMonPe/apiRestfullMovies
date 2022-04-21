import express from "express";
import routerMovies from "./src/movies/routerMovies.js"; //MOVIES ROUTERS
import routerUsers from "./src/users/routerUsers.js"; // USERS ROUTERS
import routerRent from "./src/rent/routerRent.js"; // RENT ROUTERS
import connection from "./config/BD.js"; // CONNECTION OF DB
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "./config/openapi.js";
import env from "dotenv";
import cors from "cors";


const app = express();
app.use(express.json())
app.use(cors())

// ENVIRONMENT VARS
env.config();

// CONNECTION DB
await connection();

// PARSE BODY TO JSON TO INTERPRETATE IT


const myGithub = "https://github.com/AlexMonPe/apiRestfullMovies"
const text = "documentation"
// ENDPOINTS
app.get('/', (req,res)=> res.send('Welcome to my API, read ' + text.link(myGithub) + ' to start'))
app.use('/movies', routerMovies); //ENDPOINT OF MOVIES
app.use('/users', routerUsers); //ENDPOINT OF USERS
app.use('/rent', routerRent); // ENDPOINT OF RENT
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc)) // ENDPOINT FOR DOCUMENTATION
app.get('/echo', (req,res)=> res.json('test get works!!'))

app.set("port", process.env.PORT || 5000);

// HOW TO SERVER UP IN EXPRESS
const server = app.listen(app.get("port"), () => { 
    console.log("Server up at " + process.env.SERVER_PORT)
})
export default server;




