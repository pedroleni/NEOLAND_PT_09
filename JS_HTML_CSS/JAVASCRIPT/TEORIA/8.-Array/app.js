const newArray = []; // esta es la forma moderna dee incializar una variable de tipo array

const newArrayExample = new Array(); // esta forma antigua ya no se utliza

const alumnos = ["dani", "elena", "Bárbara", "jorge", "nelson"];

//? --------> acceso a sus posiciones.......

console.log(alumnos[1]); // elena

//? --------> meter un elemento en una posicion concreta

alumnos[4] = "Rodolfo";
alumnos[7] = "Maria";
console.log("🚀 ~ file: app.js:14 ~ alumnos:", alumnos);
//! --------------------------------------------------------------------------------
//? ---------------------- metodos y propiedades------------------------------------
//! ---------------------------------------------------------------------------------

//! ------> 1) propiedad: length
console.log(alumnos.length); // 8

//! ------> 2) POP-> ELIMINAR EL ULTIMO ELEMENTO (modifica el array original) -----> te elimina la ultima posicion y la devuelve
alumnos.pop();
console.log("🚀 ~ file: app.js:24 ~ alumnos:", alumnos); // ----> maria ya no aparece

//! ------> 3) shift---> te elimina el primer elemento y lo devuelve por si quieres guardarlo en una variable
console.log(alumnos.shift()); // el metodo devuelve a dani
console.log("🚀 ~ file: app.js:28 ~ alumnos:", alumnos); // pero el array original se modifica y ya no esta dani que esa

//! ------> 4) unshift ----> introduce varias  elemento en la posicion inicial
alumnos.unshift([1, 2, 3, 1, 1], 11, 112, "HOLA");
console.log("🚀 ~ file: app.js:32 ~ alumnos:", alumnos);

//! ------> 5) splice -----> sacar cosas y poner en sustitucion otras cosas
// --------> 4 es el numero elementos que quiero borror, NUEVO
// --------> podemos meter todos los elementos que queramos no solo uno, NUEVO
alumnos.splice(0, 4, "dani", "nelson", "lucia");
console.log("🚀 ~ file: app.js:37 ~ alumnos:", alumnos);
//! ------> 6) reverse

const reverseExample = [1, 2, 3, 4, 5, 6, 7];
console.log(reverseExample.reverse());
console.log("🚀 ~ file: app.js:43 ~ reverseExample:", reverseExample);
//! ------> 7) join y push

const saludo = ["hola", "que tal?"];
const saludoJoin = saludo.join(" ");
console.log("🚀 ~ file: app.js:48 ~ saludoJoin:", saludoJoin);

// Ejercicio quiitar los mumeros del string
const textoExample = "En 241 un 22335 lugar 23525 de la mancha que ...";
const stringTextoExample = textoExample.split(" ");
console.log("🚀 ~ file: app.js:52 ~ stringTextoExample:", stringTextoExample);

const newArrayPalabrasOk = [];

stringTextoExample.forEach((palabra, index) => {
  // si no es un numero me lo metes en la ultima posicion del array con el metodo push
  isNaN(palabra) == true && newArrayPalabrasOk.push(palabra); // nos da un true si no es un numero

  /// ------> como un ternario version 2

  // ----->isNaN(palabra) == true ? newArrayPalabrasOk.push(palabra) : null;

  /// ------> con un if version 3

  //if (isNaN(palabra)) newArrayPalabrasOk.push(palabra);
});

console.log("🚀 ~ file: app.js:56 ~ newArrayPalabrasOk:", newArrayPalabrasOk);

// ahora fuera del bucle lo que hacemos es transforma ese array en un string

const joinString = newArrayPalabrasOk.join(" ");
console.log("🚀 ~ file: app.js:75 ~ joinString:", joinString);

//! ------> 8) CONCAT

// concatena dos arrays
const alumnosOne = ["luis", "juan", "luis"];
const newAlumnosOne = ["leticia"];
const concatNewArray = alumnosOne.concat(newAlumnosOne);
console.log("🚀 ~ file: app.js:84 ~ concatNewArray:", concatNewArray);
//! ------> 9) toString()

const stringToArrayAlumnos = alumnosOne.toString();
console.log(
  "🚀 ~ file: app.js:88 ~ stringToArrayAlumnos:",
  stringToArrayAlumnos
); //   luis,juan
const sinComas = stringToArrayAlumnos.replaceAll(",", " ");
console.log("🚀 ~ file: app.js:93 ~ sinComas:", sinComas);
//! ------> 10) IndexOf() ----> la posicion dentro del array del elemento que le hemos pasado

console.log(alumnosOne.indexOf("luis")); // --_> posicion 0
console.log(alumnosOne.indexOf("lu")); // --_> -1 =  no lo ha encontrado

//! ------> 11) lastIndexOf()
console.log(alumnosOne.lastIndexOf("luis")); // ----> el 2
//! ------> 12) sort ----> ordena los elementos

const numberRandom = [1, 3, 33, 45, 67, 12, 4];
console.log(numberRandom.sort()); /// [1, 12,  3, 33, 4, 45, 67]
console.log(numberRandom.sort((a, b) => a - b)); // menor de a mayor
console.log(numberRandom.sort((a, b) => b - a)); // mayor a menor

/// ordenar alfanumericamente un conjuntos de string en un array
const numberString = ["abc", "yasdc", "bca", "aaa", "aa2212"];

console.log(
  numberString.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
  })
); // [ 'abc', 'yasdc', 'bca', 'aa', 'aa2212' ]
//! ------> 13) includes() ----> true si lo incluye y false si no lo incluye
const alumnosIncludes = ["luis", "juan", "luis"];
console.log(alumnosIncludes.includes("Luis".toLowerCase())); // siempre comparasr de minuscula a minuscula o a la inversa

//! -------------------- metodos nuevos que aun no estan en fase final --- tenerlo en cuenta
// 🔹 toReversed()
// 🔹 toSorted()
// 🔹 toSpliced()
// 🔹 with()
