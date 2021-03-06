import jwt from 'jsonwebtoken';
import Users from '../src/users/modelUsers.js';
import env from 'dotenv'
import bcrypt from 'bcrypt'



env.config();

const hashPsswd = async (password) => {
  const hashedPwd = await bcrypt.hash(password, 10)
  console.log(hashedPwd)
  return hashedPwd
}
const compareHash = async (password, pwdhashed) => {
  try{
    return await bcrypt.compare(password, pwdhashed)
    }catch(error){
      console.log('Password needed', error)
    }
  }



//MIDDLEWARE THAT GIVES YOU A TOKEN IF GIVEN USER PARAMETERS IN HEADERS
const login = async (req, res, next) => {
  try {

    let userFound = await Users.findOne({
        email: req.body.email
      });
      //console.log(userFound.password, ' hashed pwd')
    if (await compareHash(req.body.password, userFound.password)) {
      console.log(userFound)
      const token = jwt.sign({email: req.body.email, id: userFound._id, role: userFound.role }, process.env.SECRET_KEY)
      res.json({token: token, id: userFound._id, role: userFound.role})
    } else {
      res.status(404).send("Email, password or role are wrong");
    }
  }catch (error) {
    console.log(error)
    res.status(401).send(error)
  }
}

// Middleware that decode your token and check if is right!
const autentication = (rolesToCheck = null) => {
  return (req,res,next) => {
    try {
      const userDecoded = jwt.verify(req.body.token, process.env.SECRET_KEY)
      req.token = userDecoded
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

export {autentication, login, hashPsswd};