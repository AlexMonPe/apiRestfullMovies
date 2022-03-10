const express = require('express');
const router = express.Router();
const controller = require('./controllerMovies.js')

// get con id
router.get('/:id', controller.getPeliculasPorId);
//GET COMPLETO FILTRANDO MINUSCULAS
router.get('/' , controller.getPeliculas)

//POST
router.post('/', controller.postPeliculas);
//PATCH QUE MODIFICA LA KEY NAME COMPARANDO EL ID EN EL ENDPOINT Y DE LOS OBJETOS
router.patch('/:id', controller.patchPeliculas);
//PUT
router.put('/:id', controller.putPeliculas);
// DELETE 
router.delete('/:id', controller.borrarPeliculas)

module.exports = router;