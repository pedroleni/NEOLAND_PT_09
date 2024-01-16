const express = require("express");

// creamos la variable con el puerto
const PORT = 8081;

// Creamos el servidor

const app = express();

//?--------------------------------------------------------------------------------------------
//!-------------------------------------------ROUTING-------------------------------------------
//?--------------------------------------------------------------------------------------------

const router = express.Router();

//! Creamos los diferentes endpoints

router.get("/saludo", (req, res, next) => {
  // envio de respuesta
  res.send("<h1>Buenos dias</h1>");
});

router.get("/movies", (req, res, next) => {
  // Mockeamos datos
  const movies = ["Start Wars", "Titanic", "Shreck"];
  // Enviamos la respuesta
  res.send(movies);
});

//!-------Configramos uso del servidor
app.use("/api/v1", router);

// Escuhamos el servidor en el puerto correspondiente
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});
