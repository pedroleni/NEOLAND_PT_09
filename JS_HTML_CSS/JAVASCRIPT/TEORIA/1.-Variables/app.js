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

const profe = {
  name: "Pedro",
  apellido: "Lerida",
};
// podemos cambiar los valores de las claves pero no puedo cambiar su tipo de dato a la variable
profe.name = "Rodolfo";

// ------>profe = {} -----> no puedo dejarlo sin contenido

// ------> ERROR profe = " El profe esta despedido" ----------> CAMBIO EL TIPO A UN STRING NI UN NUMBER, BOOLEAN, NULL, UNDEFINED, ARRAY
console.log("🚀 ~ file: app.js:58 ~ profe:", profe);

const arrayExample = [];

arrayExample.push("hola");

// ------> arrayExample = {} ----> en los array si es constante no se puede cambiar su tipo de dato
console.log("🚀 ~ file: app.js:69 ~ arrayExample:", arrayExample);
