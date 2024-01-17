//!------------------- IMPORTACIONES externas

const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

//!---------------- TRAEMOS LA FUNCION DE CONEXION A LA DB - Y EJECUTAMOS -> archivo interno

const { connect } = require("./src/utils/db");

// ejecutamos
connect();

//!--------- TRAEMOS VARIABLES DE ENTORNO

const PORT = process.env.PORT;

//!----------- CREAMOS SERVIDOR WEB

const app = express();

//!----------- ESCUCHAMOS EN EL PUERTO EL SERVIDOR
app.listen(PORT, () => {
  console.log(`Servidor escuhando en el puerto 🍀 http://localhost:${PORT}`);
});
