//! ------------ Datos a instertar de forma masiva --------------

const moviesDataSet = [
  {
    title: "The Batman",
    poster:
      "https://xl.movieposterdb.com/22_02/2022/1877830/xl_1877830_764432ad.jpg?v=2023-02-19%2023:41:01",
    year: 2022,
    released: true,
  },
  {
    title: "Dune",
    poster:
      "https://xl.movieposterdb.com/21_08/2021/1160419/xl_1160419_565d3d10.jpg?v=2023-01-06%2017:55:10",
    year: 2022,
    released: true,
  },
  {
    title: "Jaws",
    poster:
      "https://xl.movieposterdb.com/08_01/1975/73195/xl_73195_04c15a8a.jpg?v=2023-02-25%2009:28:24",
    year: 1975,
    released: false,
  },
];

//! Importaciones mongoose, dotenv y configurar dotenv

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Movie = require("../../api/models/Movie.model");
dotenv.config();

//! --------------- FUNCIÓN DE SEMBRADO DE SEMILLA

const MONGO_URI = process.env.MONGO_URI;

const createSeed = () => {
  // Conectamos a la mongouri mediante mongoose.connect
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(async () => {
      // Vamos a buscar si hay algún registro de Movie en la DB y si hay alguno serán borrados
      // --> FIND (mongoose) --> encuentra todas las coincidencias -- no confundir con ES6

      const allMovie = await Movie.find();

      // Miramos si hay registros para borrarlos mediante drop()

      if (allMovie.length > 0) {
        // hay registros --> los eliminamos

        await Movie.collection.drop();

        console.log("Registros borrados de la coleccion de Movie");
      }
    })
    .catch((error) => console.log("error en la siembra", error.message))
    .then(async () => {
      // Vamos a rrecorrer el array y por cada elemento vamos a crear un nuevo registro de Movie

      const allMovieModel = moviesDataSet.map((movie) => new Movie(movie));

      // Los insertamos todos los registros creados en la base de datos
      await Movie.insertMany(allMovieModel);

      console.log("Base de datos sembrada 🍀");
    })
    .catch((error) => console.log("Error en el sembrado", error.message))

    // Por último nos desconectamos de la base de datos
    .finally(() => {
      mongoose.disconnect();
    });
};

module.exports = createSeed;
