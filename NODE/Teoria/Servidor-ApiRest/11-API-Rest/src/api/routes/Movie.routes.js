const {
  createMovie,
  toggleCharacters,
} = require("../controllers/Movie.controller");

const MovieRoutes = require("express").Router();

MovieRoutes.post("/create", createMovie);
MovieRoutes.patch("/toggle/:id", toggleCharacters);
module.exports = MovieRoutes;
