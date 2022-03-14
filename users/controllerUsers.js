import Users from "./modelUsers.js"

//POST NEW USERS
const postUser = async (req,res) => { 
    console.log(req.body)
    const User = new Users(req.body);
    await User.save();
    res.json(User)
}
// ANOTHER METHOD TO CREATE USERS
 
// const postUser = async (req,res) => {
//     const userCreated = await Users.create(req.body);
//     res.status(200).json(userCreated)
// }

//BUSCAR USUARIOS POR ID
const getUserById = async (req, res) => {
    res.json(await Users.find({_id: req.params.id}))
}

//GET FILTER BY ALL KEYS AND RETURN ALL MOVIES IF KEY NO EXISTS
const getUser = async (req,res) => {
    if (req.query.name){
        res.json(await Users.find({name: req.query.name}))
    }else if (req.query.mail){
        res.json(await Users.find({mail: req.query.mail}))
    }else if (req.query.rol){
        res.json(await Users.find({rol: req.query.rol}))
    }else {
        res.json(await Users.find({}))
    }
}

// DELETE USER BY ID
const deleteUser = async (req,res) => {
    if(req.params.id){
        res.json(await Users.deleteOne({_id: req.params.id}))
    }
}

// PATCH/UPDATE USER 
const updateUser = async (req,res) => {
    await Users.updateOne({_id: req.params.id}, req.body)
    res.status(200).json('Updated id = ' + req.params.id)
}

export {getUser, getUserById, postUser, deleteUser, updateUser};