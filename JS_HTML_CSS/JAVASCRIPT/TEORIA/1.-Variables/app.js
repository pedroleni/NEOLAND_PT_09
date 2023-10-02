console.log("Hola mundo");

//!
//todo
//?
//

// ------------> variables

// ---------------> NAMING: DARLE UN NOMBRE

//! ----------------------> No podemos poneer de nombre un numero: let 2 = "esto es un numero"
//! ----------------------> CAMELCASE : let nombreApellido = " Pedro lerida nieto"
//! ----------------------> No ponerles ponerles palabras rreservadas: function, return, for
//! ----------------------> No guiones ni en medio, ni bajos ....
//! ----------------------> No tenemos que poner tildes, ñ, ..... elementos gramaticales especiales

//? ----------------------------- CONCEPTOS ESENCIALES-----------------------
//? --------------------> 1) Declarar una variable: ----> let name ( dar el tipo de variable y el nombre)
//? --------------------> 2) Inicializar una variable: -> let name = "Pedro" (darle un valor)

//todo -------------------------- TIPOS DE VARIABLES -----------------------------
//todo -------------------------- let, const, var --------------------------------

var name = "Pedro";
var name = "Luis";

/// con el let no puedo en el mismo scope pisarme la declaracion de una variable con el mismo nombre
let apellido = "lerida";
let nameAlumno = " Rodolfo";
// ------>let apellido  -----> ERRROR ---> PORQUE NO SE PUEDE REDECLARAR

//? ------------ TENEMOS QUE DESACOPLAR LAS FUNCIONES: es decir que no se utilicen solo para una opcion sino para que
//? ------------- abarque todas las opciones sin limitacion
const printName = (nombre) => {
  let apellidoDelPadre = "Nieto";
  console.log("Tu nombre es: " + nombre);
};

printName(name);
printName(nameAlumno);

//todo --------- CONST--------------------------------------------------

const PI = 3.1423357547658;
// PI = 4.235634643; _______-> SI YA ES CONSTANTE NO PUEDO VARIAR SU VALOR

// ------> ESTO MISMO CON LOS STRING

//! ------------------- OBJECT Y SU CARACTER DE CONSTANTE

// -----------------------> FAMILIAR DE LOS OBJECT: 1 ) OBJECT OBJECT {} --> 2) OBJECT ARRAY []

const arrayExampleTwo = [2, 3, 4, 5, 6, 7];

const profe = {
  name: "Pedro",
  apellido: "Lerida",
};
// podemos cambiar los valores de las claves pero no puedo cambiar su tipo de dato a la variable
profe.name = "Rodolfo";

// ------>profe = {} -----> no puedo dejarlo sin contenido

delete profe.name; // -------> borrar la clave con el delete si se puede
// ------> ERROR profe = " El profe esta despedido" ----------> CAMBIO EL TIPO A UN STRING NI UN NUMBER, BOOLEAN, NULL, UNDEFINED, ARRAY
console.log("🚀 ~ file: app.js:58 ~ profe:", profe);

const arrayExample = [];

arrayExample.push("hola");

// ------> arrayExample = {} ----> en los array si es constante no se puede cambiar su tipo de dato
console.log("🚀 ~ file: app.js:69 ~ arrayExample:", arrayExample);

//! ----------------------------REFERENCIAS DE MEMORIA EN LOS OBJETOS Y SU PROBLEMATICA---------------

const nombre = "Ruben";
const alumno = "Ruben";

if (alumno == nombre) console.log("son iguales");

const arrayNumber = [1, 1, 1, { name: "Pedro" }, [2, 3, 5]]; // se guarda con una referencia de memoria unitaria
const arrayNumberTwo = [1, 1, 1, { name: "Pedro" }, [2, 3, 5]];

/// lo que comparo son sus referencias de memoria no lo que sacamos en pantalla
if (arrayNumber.toString() == arrayNumberTwo.toString()) {
  console.log("los arrays son iguales");
} else {
  console.log("no son iguales");
}

const alumnoNew = {
  name: "luis",
  age: 25,
  direccion: [13740, "ciudad real"],
};

const alumnoTwo = alumnoNew;

alumnoTwo.name = "lucia";

console.log("🚀 ~ file: app.js:97 ~ alumnoNew:", alumnoNew);
console.log("🚀 ~ file: app.js:100 ~ alumnoTwo:", alumnoTwo);

/// la inmutabilidad de la informacion ----> hacer una copia de los datos para no modificar el original

const copyAlumno = { ...alumnoNew }; // copia con una referencia dee memoria nueva ---> SPREAD OPERATOR -ES6 (...)

copyAlumno.name = "Rodolfo";
console.log("🚀 ~ file: app.js:110 ~ copyAlumno:", copyAlumno);
console.log("🚀 ~ file: app.js:97 ~ alumnoNew:", alumnoNew);
