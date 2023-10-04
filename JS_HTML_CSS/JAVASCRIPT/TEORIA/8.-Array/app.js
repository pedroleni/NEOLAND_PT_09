const newArray = []; // esta es la forma moderna dee incializar una variable de tipo array

const newArrayExample = new Array(); // esta forma antigua ya no se utliza

const alumnos = ["dani", "elena", "Bárbara", "jorge", "nelson"];

//? --------> acceso a sus posiciones.......

console.log(alumnos[1]); // elena

//? --------> meter un elemento en una posicion concreta

alumnos[4] = "Rodolfo";
alumnos[7] = "Maria";
console.log("🚀 ~ file: app.js:14 ~ alumnos:", alumnos);

//? ---------------------- metodos y propiedades

// ------> 1) propiedad: length
console.log(alumnos.length); // 8

// ------> 2) POP-> ELIMINAR EL ULTIMO ELEMENTO (modifica el array original) -----> te elimina la ultima posicion y la devuelve
alumnos.pop();
console.log("🚀 ~ file: app.js:24 ~ alumnos:", alumnos); // ----> maria ya no aparece

// ------> 3) shift---> te elimina el primer elemento y lo devuelve por si quieres guardarlo en una variable
console.log(alumnos.shift()); // el metodo devuelve a dani
console.log("🚀 ~ file: app.js:28 ~ alumnos:", alumnos); // pero el array original se modifica y ya no esta dani que esa

// ------> 4) unshift ----> introduce varias  elemento en la posicion inicial
alumnos.unshift([1, 2, 3, 1, 1], 11, 112, "HOLA");
console.log("🚀 ~ file: app.js:32 ~ alumnos:", alumnos);

// ------> 5) splice -----> sacar cosas y poner en sustitucion otras cosas
// --------> 4 es el numero elementos que quiero borror, NUEVO
// --------> podemos meter todos los elementos que queramos no solo uno, NUEVO
alumnos.splice(0, 4, "dani", "nelson", "lucia");
console.log("🚀 ~ file: app.js:37 ~ alumnos:", alumnos);
// ------> 1)
// ------> 1)
// ------> 1)
// ------> 1)
// ------> 1)
// ------> 1)
// ------> 1)

//! -------------------- metodos nuevos que aun no estan en fase final --- tenerlo en cuenta
// 🔹 toReversed()
// 🔹 toSorted()
// 🔹 toSpliced()
// 🔹 with()
