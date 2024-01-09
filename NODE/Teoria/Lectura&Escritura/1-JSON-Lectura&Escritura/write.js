const fs = require("fs");

const movie = [
  {
    title: "Infinity pool",
    year: 2023,
    availables: false,
  },
  {
    title: "dora",
    year: 2020,
    availables: true,
  },
  {
    title: "Infinity world",
    year: 2019,
    availables: true,
  },
];

//todo --------- repaso ---> añadir clave valor view: false  a peliculas de 2023

const updateMovies = movie.map((pelicula) => {
  if (pelicula.year === 2023) {
    return {
      ...pelicula,
      view: false,
    };
  } else {
    return {
      ...pelicula,
    };
  }
});

console.log("updateMovies", updateMovies);

// Convertimos la data en texto plano

const strigifyMovie = JSON.stringify(updateMovies);

console.log("Movies strigifadas para que sea texto plano", strigifyMovie);

// Escribir el archivo

fs.writeFile("movies.json", strigifyMovie, () =>
  console.log("Archivo escrito correctamente 👌🏾")
);
