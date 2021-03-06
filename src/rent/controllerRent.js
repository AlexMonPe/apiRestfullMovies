import Users from "../users/modelUsers.js";
import Movies from "../movies/modelMovies.js";
import Rent from "./modelRent.js";

const getRent = async (req, res) => {
  const queryRent = {};
  if (req.query.idMovie) queryRent.idMovie = req.query.idMovie;
  if (req.query.idUser) queryRent.idUser = req.query.idUser;
  if (req.query.rent_date) queryRent.rent_date = req.query.rent_date;
  if (req.query.return_date) queryRent.return_date = req.query.return_date;
  if (req.query.totalPrice) queryRent.totalPrice = req.query.totalPrice;
  try {
    const rentFound = await Rent.find(queryRent).populate([
      "idMovie",
      "idUser",
    ]);
    res.json(rentFound);
  } catch (error) {
    res.status(404).json(error);
  }
};
//FIND RENTS BY USER ID
const getRentbyUser = async (req, res) => {
  try {
    const rentFound = await Rent.find({ idUser: req.params.id }).populate([
      "idUser",
      "idMovie",
    ]);
    res.json(rentFound);
  } catch (error) {
    res.status(404).json(error);
    console.log(error, "error backend in getRentbyuser");
  }
};
const getRentbyMovie = async (req, res) => {
  try {
    const rentFound = await Rent.find({ idMovie: req.params.id }).populate([
      "idUser",
      "idMovie",
    ]);
    res.json(rentFound);
  } catch (error) {
    res.json(error);
  }
};
const getRentById = async (req, res) => {
  try {
    const rentFound = await Rent.find({ _id: req.params.id }).populate([
      "idMovie",
      "idUser",
    ]);
    res.json(rentFound);
  } catch (error) {
    res.status(404).json(error);
  }
};
const postRent = async (req, res) => {
  const rentToCreate = {
    idMovie: req.body.idMovie,
    idUser: req.body.idUser,
    totalPrice: req.body.totalPrice,
  };
  try {
    const postedRent = await Rent.create(rentToCreate);
    res.status(201).json(await postedRent.populate(["idMovie", "idUser"]));
  } catch (error) {
    res.json(error);
  }
};

const deleteRent = async (req, res) => {
  try {
    if (req.params.id) {
      res.json(await Rent.deleteOne({ _id: req.params.id }));
    }
  } catch (error) {
    res.json(error);
  }
};

const updateRent = async (req, res) => {
  try {
    if (req.params.id) {
      await Rent.updateOne({ _id: req.params.id }, req.body);
      res.status(200).json("Updated rent id = " + req.params.id);
    }
  } catch (error) {
    res.json(error);
  }
};

export {
  getRent,
  postRent,
  updateRent,
  deleteRent,
  getRentById,
  getRentbyUser,
  getRentbyMovie,
};
