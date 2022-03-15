import jwt from 'jsonwebtoken';

// Middleware that give you a token giving email and password
const auth = (req,res,/*next*/) => {
  const token = jwt.sign({email: req.headers.email, password: req.headers.password }, 'secretkey')
  console.log(token)
  res.json(token) // return the generated token
  //next(token);
}

// Middleware that decode your token for contrart the email and password are right!
const checkJwt = (req,res,next) => {
  let tokenToCheck = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsZXhAYXBpLmNvbSIsInBhc3N3b3JkIjoiYWxleCIsImlhdCI6MTY0NzM2Mzc1Nn0.2GF6OMQz3mHN2nPk3awdCJPy7g5Pq3lDW2ntAi4GlD4";
  console.log(req.headers.email, 'req mail en checkjwt')
  console.log(req.headers.password, 'req password en checkjwt')
  
  const decoded = jwt.verify(tokenToCheck, 'secretkey')

  console.log(decoded);

  res.json(decoded)
}
export {auth, checkJwt};


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