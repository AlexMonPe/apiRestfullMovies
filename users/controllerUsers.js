
import Users from "./modelUsers.js"

//POST NEW USERS
// const postUser = async (req,res) => { 
//     console.log(req.body)
//     const User = new Users(req.body);
//     await User.save();
//     res.json(User)
// }
// ANOTHER METHOD TO CREATE USERS
 
const postUser = async (req,res) => {
    const userToCreate = {
        ...req.body, // take the rest of the object of req.body
        role: "client",
    }
    try{
        const userCreated = await Users.create(userToCreate);
        res.status(200).json(userCreated)
    }catch(error){
        res.json(error)
    }
    
}

//BUSCAR USUARIOS POR ID
const getUserById = async (req, res) => {ç
    try{
        res.json(await Users.find({_id: req.params.id}))
    }catch(error){
        res.json(error)
    }  
}

//GET FILTER BY ALL KEYS AND RETURN ALL MOVIES IF KEY NO EXISTS
const getUser = async (req,res) => {
    try {
        if (req.query.name){
            res.json(await Users.find({name: req.query.name}))
        }else if (req.query.mail){
            res.json(await Users.find({mail: req.query.mail}))
        }else if (req.query.rol){
            res.json(await Users.find({rol: req.query.rol}))
        }else {
            res.json(await Users.find({}))
        }
    } catch(error){
        res.json(error)
    }
}
    

// DELETE USER BY ID
const deleteUser = async (req,res) => {
    try{
        if(req.params.id){
            res.json(await Users.deleteOne({_id: req.params.id}))
        }
    }catch(error){
        res.json(error)
    } 
}

// PATCH/UPDATE USER 
const updateUser = async (req,res) => {
    try {
        await Users.updateOne({_id: req.params.id}, req.body)
        res.status(200).json('Updated id = ' + req.params.id)
    } catch(error){
        res.json(error)
    }
}

export {getUser, getUserById, postUser, deleteUser, updateUser};