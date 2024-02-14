const {
  createMovie,
  toggleCharacters,
  deleteMovie,
} = require("../controllers/Movie.controller");

const MovieRoutes = require("express").Router();

MovieRoutes.post("/create", createMovie);
MovieRoutes.patch("/toggle/:id", toggleCharacters);

MovieRoutes.delete("/delete/:id", deleteMovie);

module.exports = MovieRoutes;
