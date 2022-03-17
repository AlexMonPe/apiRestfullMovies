import Users from "../users/modelUsers.js"
import Movies from "../movies/modelMovies.js"
import Rent from "./modelRent.js"



const getRent = async (req,res) => {
    res.json(await Rent.find({}).populate(["idMovie", "idUser"]))
}

const postRent = async (req,res) => {
    console.log(req.body.idMovie)
    const rentToCreate = {
        idMovie: req.body.idMovie,
        idUser: req.body.idUser,
        date: new Date(),
    }
    try{
        const postedRent = await Rent.create(rentToCreate)
        res.status(201).json(postedRent.populate(["idMovie", "idUser"]))
    }catch(e){
        res.json(e)
    }
    
}

export { getRent,postRent };