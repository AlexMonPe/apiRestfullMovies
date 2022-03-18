import Movies from "../src/movies/modelMovies.js";
import Rent from "../src/rent/modelRent.js";
import Users from "../src/users/modelUsers.js";
import connection from "./BD.js";

//DB CONNECTION
connection();

const mockRent = [{idMovie: "62331bfe92e3e46d1ae3aa27", idUser: "6232ee8dd2243c99605d3275"}]

await Rent.insertMany(mockRent);

const mockMovies = [
    {"title": "intocable","year": 2011,"genre": "comedia","actor": "omar sy","duration": 109},
    {"title": "gladiator","year": 2000,"genre": "accion","actor": "russell crowe","duration": 150},
    {"title": "forrest gump","year": 1994,"genre": "comedia","actor": "tom hanks","duration": 142},
    {"title": "la vida es bella","year": 1997,"genre": "drama","actor": "roberto benigni", "duration": 117}
]

await Movies.insertMany(mockMovies);

const mockUsers = [
    {"_id": "622a409da275460dcace6918","name": "alex","mail": "alex@api.com","rol": "administrator"},
    {"_id": "622a409da275460dcace691b","name": "pablo","mail": "pablo@api.com","rol": "administrator"},
    {"_id": "622a409da275460dcace691e","name": "mihai","mail": "mihai@api.com","rol": "client"},
    {"_id": "622a409da275460dcace6921","name": "david","mail": "david@api.com","rol": "client"},
    {"_id": "622a409da275460dcace6924","name": "susana","mail": "susana@api.com","rol": "client"}
]

await Users.insertMany(mockUsers)