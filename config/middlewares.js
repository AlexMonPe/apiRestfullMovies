import Users from "../users/modelUsers.js";

const autentication = async (req,res,next) => {
  console.info('middleware of autentication');
// transform the autentication function in a middleware function
// Compares the headers credentials vs BD credentials.
   const userFound = await Users.findOne({
    email: req.headers.email,
    password: req.headers.password,
  });
  if (!userFound) {
    res.status(401).send("You shall not pass");
  } else {
    next();
  }
  // Autorized, and continues in next middleWare
}
export default autentication;