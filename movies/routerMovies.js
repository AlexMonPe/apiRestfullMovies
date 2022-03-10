const express = require('express');
const router = express.Router();
const controller = require('./controllerMovies.js')

// GET BY ID WITH PATH PARAMS
router.get('/:id', controller.getMoviesbyId);
//GET FILTERING BY ALL KEYS AND RETURN ALL MOVIES IF KEY NO EXISTS
router.get('/' , controller.getMovies)

//POST NEW MOVIES
router.post('/', controller.postMovies);
//PATCH QUE MODIFICA LA KEY NAME COMPARANDO EL ID EN EL ENDPOINT Y DE LOS OBJETOS

// DELETE MOVIES
// router.delete('/:id', controller.borrarPeliculas)

module.exports = router;
