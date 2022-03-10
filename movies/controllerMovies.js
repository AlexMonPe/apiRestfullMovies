const Movie = require('./modelMovies.js')

// CRUD MOVIES

// POST NEW MOVIES
const postMovies = async (req,res) => { 
    const Movie = new Movie(req.body);
    await Movie.save();
    res.json(Movie)
}
module.exports.postMovies = postMovies;

//GET BY ID
const getMoviesbyId = async (req,res) => {
    res.json(await Movie.find({_id: req.params.id}))
}
module.exports.getMoviesbyId = getMoviesbyId;

//GET FILTER BY ALL KEYS AND RETURN ALL MOVIES IF KEY NO EXISTS
const getMovies = async (req,res) => {
    if(req.query.title){
        res.json(await Movie.find({title: req.query.title}))
    }else if (req.query.genre){
        res.json(await Movie.find({genre: req.query.genre}))
    }else if (req.query.actor){
        res.json(await Movie.find({actor: req.query.actor}))
    } else if (req.query.year){
        res.json(await Movie.find({year: req.query.year}))
    }else if (req.query.duration){
        res.json(await Movie.find({duration: req.query.duration}))
    }else {
        res.json(await Movie.find({}))
    }
}
module.exports.getMovies = getMovies;

// DELETE