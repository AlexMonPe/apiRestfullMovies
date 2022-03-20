import jwt from 'jsonwebtoken';
import Users from '../src/users/modelUsers.js';
import env from 'dotenv'
env.config();

//MIDDLEWARE THAT GIVES YOU A TOKEN IF GIVEN USER PARAMETERS IN HEADERS
const createToken = async (req, res, next) => {
  try {
    let userFound = await Users.findOne({
        email: req.headers.email,
        password: req.headers.password,
        role: req.headers.role,
      });
    if (!userFound) {
      res.status(404).send("Email, password or role are wrong");
    } else {
      const token = jwt.sign({email: req.headers.email, password: req.headers.password, role: req.headers.role }, process.env.SECRET_KEY)
      res.json('This is your token: ' + token)
    }
  }catch (error) {
    res.status(401).json(error)
  }
}

// Middleware that decode your token and check if is right!
const autentication = (rolesToCheck = null) => {
  return (req,res,next) => {
    try {
      const userDecoded = jwt.verify(req.headers.token, process.env.SECRET_KEY)
      if (rolesToCheck == null || rolesToCheck.find((role)=> role === userDecoded.role)){
        next();
      }else{
        res.status(403).send("You don\'t have this credentials" )
      }
    } catch (error){
      res.status(401).json(error)
    }
  }
}

export {autentication, createToken};