import express from "express";
const router = express.Router();
import {getUser, getUserById, postUser, deleteUser, updateUser} from "./controllerUsers.js"
import {autentication, checkToken} from "../config/middlewares.js"

// //GET USER BY NAME/ID
router.get('/', checkToken("administrator"), getUser)

//GET USERS BY ID
router.get('/:id', checkToken("administrator"),getUserById)

//POST NEW USER
router.post('/', checkToken("administrator"), postUser)

//DELETE USER BY ID
router.delete('/:id', checkToken("administrator"), deleteUser)

//PATCH USER
router.patch('/:id', checkToken("administrator"), updateUser);

// Endpoint for autentication
router.post('/auth', autentication)

export default router;