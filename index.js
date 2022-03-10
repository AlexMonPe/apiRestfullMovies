const express = require('express');
const routerMovies = require('./movies/routerMovies.js')
const routerUsers = require('./users/routerUsers.js')
const app = express()
const mongoose = require('mongoose')

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
