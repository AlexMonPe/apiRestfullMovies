import express from "express";
import routerMovies from "./movies/routerMovies.js";
import routerUsers from "./users/routerUsers.js"
import connection from "./config/BD.js";
import morgan from "morgan";
import autentication from "./config/autentication.js";

const app = express()

// Connection DB
connection();

// Parse body contents to JSON that can interpretate it.
app.use(express.json());
// Morgan to show logs
app.use(morgan('tiny'));

//Autentication
app.use("/", async (req,res,next) => {
    console.info('middleware of autentication');
// transform the autentication function in a middleware function
// Compares the headers credentials vs BD credentials.

    const autenticated = await autentication({
        email: req.headers.email,
        password: req.headers.password,
        rol: req.headers.rol,
    })
    if (autenticated){
        console.log('autenticated is true')
        next();
    }else {
        res.status(401).send('Don\'t have credentials');
    }
    // Autorized, and continues in next middleWare
    
})

// How to server up with express
app.listen(3003,()=> console.info('Server Up at port 3003'));


// Routes defined
app.use('/movies', routerMovies);
app.use('/users', routerUsers);
