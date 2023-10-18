const { character } = require("./data");

///! ----------------------------------------------------------------------------
///? ------------------------------------MAP ------------------------------------
///! ----------------------------------------------------------------------------

const { results } = character;
//console.log("🚀 ~ file: app.js:8 ~ results:", results);

const arrayMapeoDatos = results.map((character, index) => ({
  name: character.name,
  geneder: character.gender,
  id: character.id,
}));
// console.log(
//   "🚀 ~ file: app.js:15 ~ arrayMapeoDatos ~ arrayMapeoDatos:",
//   arrayMapeoDatos
// );

results.map((character) => {
  //
  //
  //
  //
  //console.log(character.id);
});

///! ----------------------------------------------------------------------------
///? ------------------------------------filter ------------------------------------
///! ----------------------------------------------------------------------------

// el filtro devuelve un array con todas las councidencias que cumplan las condiciones que les hemos puesto --> DEVUELVE UN ARRAY

const filterData = results.filter(
  (character, index) =>
    character.gender === "Male" &&
    character.species === "Human" &&
    character.status === "Dead"
);
//console.log("🚀 ~ file: app.js:37 ~ filterData:", filterData);

///! ----------------------------------------------------------------------------
///? ------------------------------------find ------------------------------------
///! ----------------------------------------------------------------------------

// encuentra solo un elemento, el primero que cumpla con la condicon ---> DEVUELVE UN OBJETO

const findData = results.find(
  (character, index) => character.status === "Dead"
);
console.log("🚀 ~ file: app.js:51 ~ findData:", findData);

// const texto = "En un lugar de la mancha .....";

// const textoLetraFind = texto.find((palabra) => palabra === "En");

//todo se puede con array de string pero es raro porque nos devuelve lo mismo que le ponemos de condicion
const segundos = ["Filete", "Pizza", "Cachopo"];

const findComida = segundos.find((comida, index) => comida === "Filete");
console.log("🚀 ~ file: app.js:60 ~ findComida:", findComida);

///! ----------------------------------------------------------------------------
///? -----------------------------------EVERY -----------------------------------
///! ----------------------------------------------------------------------------

// el every nos da true si todos cumplen la condicion si alguno no la ccumple tendriamos un false
const vegan = ["🥝", "🥝", "🥝", "🥝", "🍔", "🥝", "🥝", "🥝"];

const veganOk = vegan.every((item, index) => item === "🥝");
console.log("🚀 ~ file: app.js:70 ~ veganOk:", veganOk); /// false

///! ----------------------------------------------------------------------------
///? -----------------------------------SOME ------------------------------------
///! ----------------------------------------------------------------------------

// con que uno de ellos ya cumpla la condicion ya nos da un true

const someVeganOk = vegan.some((item, index) => item === "❤"); // me da un false porque no lo incluye al menos uno en el array
console.log("🚀 ~ file: app.js:80 ~ someVeganOk:", someVeganOk);

///! ----------------------------------------------------------------------------
///? -----------------------------------REDUCE ------------------------------------
///! ----------------------------------------------------------------------------
