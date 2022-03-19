import Movies from "./modelMovies.js"

// CRUD MOVIES

// POST NEW MOVIES
const postMovie = async (req,res) => { 
    try {
        const Movie = new Movies(req.body);
        await Movie.save();
        res.json(Movie)
    }catch(error){
        res.json(error);
    }
}
// ANOTHER METHOD TO CREATE A MOVIE
// const postMovie = async (req,res) => {
//     const movieCreated = await Movies.create(req.body);
//     res.status(200).json(movieCreated)
//}

//GET BY ID
const getMoviebyId = async (req,res) => {
    try{
        res.json(await Movies.find({_id: req.params.id}))
    }catch(error){
        res.json(error)
    }  
}

//GET FILTER BY ALL KEYS AND RETURN ALL sS IF KEY NO EXISTS
const getMovie = async (req,res) => {
    try{
        const queryMovie = await Movies.find({ $or: [
            {title: req.query.title},
            {genre: req.query.genre},
            {actor: req.query.actor},
            {year: req.query.year},
            {duration: req.query.duration}
        ]})
        if(!req.query){
            res.json(await Movies.find({}));
        }else {
            res.json(queryMovie)
        }
    }catch(error){
        res.json(error)
    }
}
// DELETE MOVIE

const deleteMovie = async (req,res) => {
    try{
        if(req.params.id){
            res.json(await Movies.deleteOne({_id: req.params.id}))
        }
    }catch(error){
        res.json(error)
    }
}

const updateMovie = async (req,res) => {
    try{
        await Movies.updateOne({_id: req.params.id}, req.body)
        res.status(200).json('Updated id = ' + req.params.id)    
    }catch(error){
        res.json(error)
    }
}

export {postMovie, getMoviebyId , getMovie , deleteMovie , updateMovie};