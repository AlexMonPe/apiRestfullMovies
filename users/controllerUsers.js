const User = require('./modelUsers.js')

//POST NEW USERS

const postUsers = async (req,res) => { 
    const user = new Users(req.body);
    await user.save();
    res.json(user)
}
module.exports.postUsers = postUsers;

//BUSCAR USUARIOS POR ID
const getUserById = async (req, res) => {
    res.json(await User.find({_id: req.params.id}))
}
module.exports.getUserById = getUserById;
// //GET FILTER BY ALL KEYS AND RETURN ALL MOVIES IF KEY NO EXISTS
const getUsers = async (req,res) => {
    if (req.query.name){
        res.json(await User.find({name: req.query.name}))
    }else if (req.query.mail){
        res.json(await User.find({mail: req.query.mail}))
    }else if (req.query.rol){
        res.json(await User.find({rol: req.query.rol}))
    }else {
        res.json(await User.find({}))
    }
}
module.exports.getUsers = getUsers;