import Movies from "./modelMovies.js"

// CRUD MOVIES

// POST NEW MOVIES
const postMovie = async (req,res) => { 
    const Movie = new Movies(req.body);
    await Movie.save();
    res.json(Movie)
}
// ANOTHER METHOD TO CREATE A MOVIE
// const postMovie = async (req,res) => {
//     const movieCreated = await Movies.create(req.body);
//     res.status(200).json(movieCreated)
// }

//GET BY ID
const getMoviebyId = async (req,res) => {
    res.json(await Movies.find({_id: req.params.id}))
}

//GET FILTER BY ALL KEYS AND RETURN ALL sS IF KEY NO EXISTS
const getMovie = async (req,res) => {
    if(req.query.title){
        res.json(await Movies.find({title: req.query.title}))
    }else if (req.query.genre){
        res.json(await Movies.find({genre: req.query.genre}))
    }else if (req.query.actor){
        res.json(await Movies.find({actor: req.query.actor}))
    } else if (req.query.year){
        res.json(await Movies.find({year: req.query.year}))
    }else if (req.query.duration){
        res.json(await Movies.find({duration: req.query.duration}))
    }else {
        res.json(await Movies.find({}))
    }
}

// DELETE MOVIE

const deleteMovie = async (req,res) => {
    if(req.params.id){
        res.json(await Movies.deleteOne({_id: req.params.id}))
    } 
}

const updateMovie = async (req,res) => {
    await Movies.updateOne({_id: req.params.id}, req.body)
    res.status(200).json('Updated id = ' + req.params.id)
    
}

export {postMovie, getMovie, getMoviebyId,deleteMovie, updateMovie};