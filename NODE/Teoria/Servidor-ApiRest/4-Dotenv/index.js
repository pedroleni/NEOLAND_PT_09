// !---- Requerimos para utilizar las dependecias
const express = require("express");

const dotenv = require("dotenv");

// Ejecutamos dotenv

dotenv.config();

// LLamamos a la variable de entorno de nuestro .env
const PORT = process.env.PORT;

const app = express();

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
