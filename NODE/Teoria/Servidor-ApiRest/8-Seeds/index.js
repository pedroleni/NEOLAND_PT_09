//! Importaciones y configuracion de dotenv

const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

//! Traemos la función de sembrado de semilla
const createSeed = require("./src/utils/seeds/movie.seeds");
createSeed();

//! Creación del servidor web
const app = express();

//! limites json y urlencoded
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: false }));

//! Creamos un error en caso de no tener la ruta correcta
app.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  return next(error);
});

//! 500 ---> server internal error -> error inesperado
app.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || "Error inesperado");
});

// Revela la tecnología con la que esta realizado el back
app.disabled("x-powered-by");

//! Escuchamos el servidor

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
