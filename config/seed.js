import Rent from "../src/rent/modelRent.js";
import connection from "./BD.js";

connection();

const mockRent = [{idMovie: "62331bfe92e3e46d1ae3aa27", idUser: "6232ee8dd2243c99605d3275"}]

await Rent.insertMany(mockRent);