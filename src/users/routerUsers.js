import express from "express";
const router = express.Router();
import {getUser, getUserById, postUser, deleteUser, updateUser, adminCreator} from "./controllerUsers.js"
import { login } from "../../config/middlewares.js"

// //GET USER BY NAME/ID
router.get('/', getUser) // ALL  USERS CAN GET USERS

//GET USERS BY ID
router.get('/:id', /*autentication(),*/ getUserById) // ONLY REGISTERED USERS CAN GET USERS BY ID

//POST NEW USER
router.post('/register', postUser) // ALL CAN CREATE A USER

//DELETE USER BY ID
router.delete('/:id', /*(["administrator"]),*/ deleteUser) // ONLY ADMININISTRATOR CAN DELETE USERS

//PATCH USER
router.patch('/:id',/* autentication(["administrator"]),*/ updateUser); // ONLY ADMINISTRATOR CAN UPDATE USERS

// ENDPOINT TO AUTENTICATE AND TO CREATE A TOKEN
router.post('/login', login) // ALL CAN ENTER IN THIS ENDPOINT AND TAKE A TOKEN

//ENDPOINT TO CREARE ADMINS

router.post('/createAdmin', adminCreator)

export default router;