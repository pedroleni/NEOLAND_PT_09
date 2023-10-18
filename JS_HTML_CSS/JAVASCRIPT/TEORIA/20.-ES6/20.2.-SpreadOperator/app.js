const movie = {
  title: "Batman",
  director: "Christopher Nolan",
  year: 2013,
  actors: {
    batman: "Christian Bale",
    alfred: "Michael Caine",
  },
};

const movieCopyFalsa = movie;
movieCopyFalsa.title = "barbie";

//console.log("🚀 ~ file: app.js:10 ~ movie:", movie);

/// ahora en el objeto original movie tenemos que se ha cambiado la clave title por barbie por lo cual esto no es una copia valida

/// ---------> SPREAD OPERATOR ( ... )

const realCopyMovie = { ...movie }; // copia datos de forma real e independiente

realCopyMovie.title = "Batman";

movie.title = "Teleñecos";
//console.log("🚀 ~ file: app.js:21 ~ realCopyMovie:", realCopyMovie);
//console.log("🚀 ~ file: app.js:21 ~ movie:", movie);

/// ! -----------------> podemos hacer una copia y a la vez modificar alguna clave

const copyMovieModifyKey = { ...movie, year: 2050 };
console.log("🚀 ~ file: app.js:31 ~ copyMovieModifyKey:", copyMovieModifyKey);

//! -------------------> concatenar dos arrays o dos object-position:

const price = {
  price: 32344436,
};
const concatObject = { ...movie, ...price };
//console.log("🚀 ~ file: app.js:39 ~ concatObject:", concatObject);

//! concatenar dos objetos que comparten algunas claves que se llaman igual

const concatSameKey = { ...concatObject, ...copyMovieModifyKey }; // si comparten nombre en la clave se quedan con el ultimo valor
//console.log("🚀 ~ file: app.js:44 ~ concatSameKey:", concatSameKey);

//! copiar arrays y concatenarlo

const primeros = ["Sopa", "Ensalada", "Pan"];
const segundos = ["Filete", "Pizza", "Cachopo"];

const menu = [...primeros, ...segundos];
console.log("🚀 ~ file: app.js:52 ~ menu:", menu);
