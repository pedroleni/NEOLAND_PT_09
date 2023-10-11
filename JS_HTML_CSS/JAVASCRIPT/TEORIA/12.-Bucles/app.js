//?-----------> iterar: recorrer las posiciones de un elemento
//? --------------> No iterable los object object; iterables: array, string, arguments,set

//! ------------------------------------------------------------------------
//? ........................... for ........................................
//! ------------------------------------------------------------------------

// 1) Elemento (variable que se mueve, la incializacion de esa variable)
// 2) Condicion que nos dice cuando la variable se tiene que parar
// 3) tenemos el incremeto o decremento de variable para hacer que se mueva

for (let i = 0; i < 20; i++) {
  //console.log(`Esta en contando y es numero es: ${i}`);
}

for (let x = 20; x >= 0; x--) {
  //console.log(`Esta en contando y es numero es: ${x}`);
}

// ------------> recorrer un array

const alumnos = ["Luis", "Maria", "Kevin"];

for (let i = 0; i < alumnos.length; i++) {
  //console.log(alumnos[i]);
}

// -------------> los string

const saludo = "hola que tal ?";
let acc = 0;

for (let i = 0; i < saludo.length; i++) {
  saludo[i] === "a" && acc++;
}

const recuento = {
  letra: "a",
  repeticiones: acc,
};

console.log(recuento);

// ------> funcion desacoplada que le pasamos una letra , un string y nos busca las veces que se repita y nos lo devuelve

const recuentoLetras = (letra, frase) => {
  let accc = 0;
  for (let i = 0; i < frase.length; i++) {
    frase[i] === letra && accc++;
  }

  return {
    letra, // esto es igual a letra:letra
    repeticiones: accc,
  };
};

const quixote = "En un lugar de la mancha de .....";
const conteoDeVeces = recuentoLetras("a", quixote);
console.log("🚀 ~ file: app.js:60 ~ conteoDeVeces:", conteoDeVeces);
