//!?-----------------------------------------------------
//! -------------1) Destructuring a Object Object -----{}
//!?-----------------------------------------------------
const movie = {
  title: "Batman",
  director: "Christopher Nolan",
  year: 2013,
  actors: {
    batman: "Christian Bale",
    alfred: "Michael Caine",
  },
};

// vamos a sacar con destructuring la info de title y year

const { title, year } = movie;
console.log("🚀 ~ file: app.js:16 ~ year:", year);
console.log("🚀 ~ file: app.js:16 ~ title:", title);

const { actors } = movie;
console.log("🚀 ~ file: app.js:20 ~ actors:", actors);

//!?-----------------------------------------------------
//! -------------2) Destructuring a Object array -----[]
//!?-----------------------------------------------------

const members = ["Miercoles", "Fetido", "Morticia", "Gomez", "Cosa"];

const [laNina, eltio, madre, padre, mascota] = members;
console.log("🚀 ~ file: app.js:27 ~ laNina:", laNina);

// operador rest -----> se queda con el resto de elementos que no estan identificados unitariamente
const [hija, tito, ...restoDePersonas] = members;
console.log("🚀 ~ file: app.js:31 ~ restoDePersonas:", restoDePersonas);
console.log("🚀 ~ file: app.js:30 ~ tito:", tito);

// ---->const [...restoPersonas, mascotaCopy]= members -----> el resto no se puede poner delante

//!?----------------------------------------------------------
//! -------------3) Destructuring del return de las funciones----
//!?----------------------------------------------------------

const construirPersona = (nombre, apellido, direccion) => {
  return {
    nombre,
    apellido,
    direccion,
  };
};

const pedro = construirPersona("Pedro", "Lerida", {
  numero: 25,
  calle: "Orense",
});
console.log("🚀 ~ file: app.js:55 ~ pedro:", pedro);

// si lo hago con destructuring

const { nombre, direccion } = construirPersona("Pedro", "Lerida", {
  numero: 25,
  calle: "Orense",
});
console.log("🚀 ~ file: app.js:63 ~ nombre:", nombre);
console.log("🚀 ~ file: app.js:63 ~ direccion:", direccion);

const { apellido } = construirPersona("Pedro", "Lerida", {
  numero: 25,
  calle: "Orense",
});
console.log("🚀 ~ file: app.js:70 ~  apellido:", apellido);
