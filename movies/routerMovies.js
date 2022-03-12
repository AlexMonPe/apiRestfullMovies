import express from "express"
const router = express.Router();
import {getMoviebyId, getMovie, postMovie, deleteMovie, updateMovie} from "./controllerMovies.js"

// GET BY ID WITH PATH PARAMS
router.get('/:id', getMoviebyId);
//GET FILTERING BY ALL KEYS AND RETURN ALL MOVIES IF KEY NO EXISTS
router.get('/' , getMovie)

//POST NEW MOVIES
router.post('/', postMovie);
//PATCH QUE MODIFICA LA KEY NAME COMPARANDO EL ID EN EL ENDPOINT Y DE LOS OBJETOS

// DELETE MOVIES
router.delete('/:id', deleteMovie);

// UPDATE/PATCH A MOVIE
router.patch('/:id', updateMovie);

export default router;
