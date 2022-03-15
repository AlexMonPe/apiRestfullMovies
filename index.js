import express from "express";
import routerMovies from "./movies/routerMovies.js";
import routerUsers from "./users/routerUsers.js"
import connection from "./config/BD.js";
import morgan from "morgan";
import autentication from "./config/middlewares.js";
import jwt from 'jsonwebtoken';

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

const auth = (req,res,/*next*/) => {
    const token = jwt.sign({email: req.headers.email, password: req.headers.password }, 'secretkey')
    console.log(token)
    res.json(token)
    //next(token);
}

const checkJwt = (tokenToCheck) => {
    console.log(req.headers.email, 'req mail en checkjwt')
    console.log(req.headers.password, 'req password en checkjwt')
    
    const decoded = jwt.verify(tokenToCheck, 'secretKey')

    console.log(decoded.email)
    console.log(decoded);

    return decoded
}
app.use('/', autentication)

// Routes defined
app.use('/movies', routerMovies);
app.use('/users', routerUsers);
//app.use('/auth', checkjwt);


