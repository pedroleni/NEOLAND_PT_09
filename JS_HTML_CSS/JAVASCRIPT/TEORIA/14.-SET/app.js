// el Set----> esto es una coleccion de datos que no admite duplicados

let colors = new Set();

colors.add("rojo");
colors.add("rojo");
colors.add("verde");
colors.add("rojo");
colors.add("azul");
colors.add(["color", "azul"]);
colors.add("rojo");
console.log("🚀 ~ file: app.js:13 ~ colors:", colors);

// ---> no se puede no es un objeto ---> for (let color in colors) console.log(color);

for (let color of colors) console.log(color); // si deja iterarlo

colors.forEach((item) => console.log(item));

// -----> colors.map((item) => console.log(item)) ---> no deja, pasa lo mismo que el string con los MAP

const colorsRepetidos = ["rojo", "verde", "rojo", "azul", "rojo"];

let colorSetNoRepetidos = new Set(colorsRepetidos);
console.log("🚀 ~ file: app.js:25 ~ colorSetNoRepetidos:", colorSetNoRepetidos);

//todo convertir un set en un array --------EJERCICIO----------------

// EL SET ----> se recorre con un forEach

const parseSETtoARRAY = (set) => {
  // creamos un array que luego llenaremos
  const newArray = [];
  // cogemos el set que recibimos por parametro y lo recorremos
  set.forEach((item, index) => {
    // cuando lo recorremos hacemos un push al array que creamos incialmente --> le pusheamos item( el elememnto singular del conjunto de datos)
    newArray.push(item);
  });

  // por ultimo devolvemos el array que hemos conveertido desde un SET
  return newArray;
};

// LLAMAMOS A LA FUNCIOON Y LE METEMOS EL PARAMETRO ---> Y SE GUARDA EN UNA VARIABLE (BUENA PRACTICA PORQUE TIENE UN RETURN)
const returnNewArray = parseSETtoARRAY(colorSetNoRepetidos);
console.log("🚀 ~ file: app.js:43 ~ returnNewArray:", returnNewArray);
