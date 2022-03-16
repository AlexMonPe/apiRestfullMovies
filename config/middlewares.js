import jwt from 'jsonwebtoken';
import Users from '../users/modelUsers.js';

// Middleware that give you a token giving email and password
const autentication = async (req, res, next) => {
  try {
    let userFound = await Users.findOne({
        email: req.headers.email,
        password: req.headers.password,
      });
    if (!userFound) {
      res.status(404).send("Email or password is wrong");
    } else {
      const token = jwt.sign({email: req.headers.email, password: req.headers.password, role: req.body.role }, 'secretkey')
      res.json('Este es tu token: ' + token)
    }
  }catch (error) {
    res.status(401).json(error)
  } 
}

// Middleware that decode your token for contrast the token that you have is right!
const checkToken = (roleToCheck) => {
  return (req,res,next) => {
    try {
      const userVerified = jwt.verify(req.headers.token, 'secretkey')
      if (userVerified.role == roleToCheck){
      next();
      }else {
        res.status(403).send("You don\'t have this credentials" )
      }
      
    } catch (error){
      res.status(401).json(error)
    }
  }
}

export {autentication, checkToken};


// const autentication = async (req,res,next) => {
//   console.info('middleware of autentication');
// // transform the autentication function in a middleware function
// // Compares the headers credentials vs BD credentials.
//    const userFound = await Users.findOne({
//     email: req.headers.email,
//     password: req.headers.password,
//   });
//   if (!userFound) {
//     res.status(401).send("You shall not pass");
//   } else {
//     next();
//   }
//   // Autorized, and continues in next middleWare
// }
// export default autentication;