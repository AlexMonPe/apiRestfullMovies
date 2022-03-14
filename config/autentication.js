import Users from "../users/modelUsers.js";

const autentication = async ({email, password, rol}) => {
    console.log(email, password, rol)
    const userFound = await Users.findOne ({email, password, rol}) 
    // return null
    console.log(userFound)
    if (userFound) return true;
    return false;
}
export default autentication;