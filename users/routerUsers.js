import express from "express";
const router = express.Router();
import {getUser, getUserById, postUser, deleteUser, updateUser} from "./controllerUsers.js"


// //GET USER BY NAME/ID
router.get('/', getUser)

//GET USERS BY ID
router.get('/:id', getUserById)

//POST NEW USER
router.post('/', postUser)

//DELETE USER BY ID
router.delete('/:id', deleteUser)

//PATCH USER
router.patch('/:id', updateUser);

export default router;