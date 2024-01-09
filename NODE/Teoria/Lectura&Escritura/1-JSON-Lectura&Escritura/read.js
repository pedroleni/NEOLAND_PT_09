// Importamos librería fs que permite leer y escribir archivos
//!------------> LEE Y ESCRIBE TEXTO PLANO

const fs = require("fs");

const movie = [];

//! ---> Función asíncrona
fs.readFile("./src/data/movie.json", (error, data) => {
  error ? console.log(error) : movie.push(JSON.parse(data));

  console.log(movie);
});

//! ---> Si ponemos el console.log de movies sale vacío porque por asíncronia aún no se ha puseado
// const printData = () => {
//   console.log(movie);
// };
