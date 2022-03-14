import Users from "./users/modelUsers.js"

const autentication = ({email, password}) => {
    const userFound = Users.findOne({email, password})

if (userFound){
    return true
}
return false;

};
autentication();
export default autentication;