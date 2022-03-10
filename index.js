const express = require('express');
const routerMovies = require('./peliculas/routerPeliculas.js')
const routerUsers = require('./usuarios/routerUsuarios.js')
const app = express()
const mongoose = require('mongoose')

app.use(express.json());

app.listen(3002,()=> console.log('Servidor levantado en puerto 3002'))
app.use('/movies', routerMovies);
app.use('/users', routerUsers);

mongoose.connect('mongodb://localhost:27017/Peliculas', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('Mongoose-Server Up'))
.catch((error)=> console.log(error))
