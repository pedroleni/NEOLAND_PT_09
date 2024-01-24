const Movie = require("../models/Movie.model");

//? -------------------------------------------------------
//!--------------------- POST - CREATE --------------------
//? -------------------------------------------------------

const createMovie = async (req, res, next) => {
  console.log(req.body);
  try {
    await Movie.syncIndexes();

    // Creamos nueva instancia de Movie
    const newMovie = new Movie(req.body);

    // Guardamos ese registro en la db
    const saveMovie = await newMovie.save();

    // Si existe es que ha guardado de forma correcta --> 200
    if (saveMovie) {
      return res.status(200).json(saveMovie);
    } else {
      // Sino existe es que no se ha guardado --> 409
      return res.status(409).json("No se ha podido crear la Movie");
    }
  } catch (error) {
    return res.status(409).json({
      error: "Error en la creación de nueva Movie",
      message: error.message,
    });
  }
};

module.exports = { createMovie };
