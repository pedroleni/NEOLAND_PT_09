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

//! ------------------------------------------------------------------------
//? ........................... for in........................................
//! ------------------------------------------------------------------------

// para los object object

const dog = {
  name: "federico",
  age: 3,
  adress: {
    CP: 28029,
    street: "orense",
  },
};

// dog.forEach((element) => {
//   console.log(element);
// });-------> no se puede porque el object object no es un elemento iterable

for (let key in dog) {
  //console.log(`La es ${key} y su valor es ${dog[key]}`);
}

//! ------------------------------------------------------------------------
//? ........................... for of......................................
//! ------------------------------------------------------------------------

/// solo sirve para elementos iterables
const dogExample = {
  name: "federico",
  age: 3,
  adress: {
    CP: 28029,
    street: "orense",
  },
};

// for (let element of dogExample) {
//   console.log(element);
// }-------> no se puede hacer un for of porque los object object no son iterables

const comidas = ["macarrones", "espaguetis", "pollo", "fideos"];

for (let comida of comidas) {
  console.log(`Esta comida es ${comida}`);
}

const fraseExample = "Hola que tal estas ?";

for (let char of fraseExample) {
  console.log(`estamos recorriendo esta letra: ${char}`);
}

//! ------------------------------------------------------------------------
//? ........................... forEach......................................
//! ------------------------------------------------------------------------
// SOLO PARA ELEMENTOS ITERABLES
const numberRandom = [1, 2, 3, 5, 62, 13, 53, 245];

numberRandom.forEach((number, index) => {
  //console.log(`En la posicion ${index} es valor es ${number}`);
});

//todo --------------> sacamos el numero que es mayor del array --> devolver el numero mas grande y su posicion
let numeroMayor = {
  numero: 0,
  index: 0,
};
numberRandom.forEach(
  (item, index) =>
    item > numeroMayor.numero &&
    (numeroMayor.numero = item) &&
    (numeroMayor.index = index)
);

console.log(numeroMayor);

//! ------------------------------------------------------------------------
//? ........................... MAP......................................
//! ------------------------------------------------------------------------

// no se puede para un string
const fraseExampleMapeo = "Esto es un ejemplo de mapeo";

// fraseExampleMapeo.map((letra, index) => {
//   console.log(`Estamos iterando en la letra ${letra}`);
// }); -----> no se puede porque en los string lo hariamos con el for of o el forEach

// para los arrays si .--->

const comidasMapeo = ["macarrones", "espaguetis", "pollo", "fideos"];
comidasMapeo.map((comida, index) => {
  console.log(comida);
});

//! ------------------------------------------------------------------------
//? ........................... while......................................
//! ------------------------------------------------------------------------

let i = 0;
let acumular = 0;

while (i < 10) {
  console.log(`me muevo y el i vale: ${i}`);
  i++;
}

//! ------------------------ RESUMEN DE CUANDO UTILIZARLOS Y CON QUE-----------
// string: for of, forEach, forNormal
//array: for of, forEach, forNormal, map
// object object: for in
