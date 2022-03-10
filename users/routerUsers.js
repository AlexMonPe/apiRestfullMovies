const express = require("express");
const router = express.Router()
const controller = require('./controllerUsers.js')


// //GET DE USUARIOS POR NOMBRE/PERFIL
router.get('/', controller.getUsers)

//GET DE USUARIOS POR ID
router.get('/:id', controller.getUserById)

//POST USUARIO NUEVO
router.post('/', controller.postUsers)
//DEFINIR ROLES DE ADMINISTRADOR Y CLIENTE

module.exports = router;