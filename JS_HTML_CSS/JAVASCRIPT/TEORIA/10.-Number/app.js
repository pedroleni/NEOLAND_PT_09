// numero entero

const numberInt = 45343;

// numeros decimales

const numberFloat = 4.56;

// los separadores de los numeros

const separadorNumber = 1_000_000;
console.log("🚀 ~ file: app.js:15 ~ separadorNumber:", separadorNumber);

//! ------------------------------------------------------------------------------
//? ------------------------- METODOS Y PROPIEDADES -----------------------------
//! ------------------------------------------------------------------------------

//? -------> 1) isNaN ----> esto no es un nuemero? ---> lo que valora es que lo que metamos no sea un numeros

// ....... > da true cuando no es un numero

console.log(isNaN("23.234")); // ----> nos da unm false y da igual que este entre comillas
console.log(parseInt("23"));
console.log(parseFloat("23.24235"));

console.log(isNaN("hola que tal")); // ---> nos da un true diciendo que esto no es un numero porque es un string

//? ------> 2)parseInt -----> convierte un string a un entero
//? ------> 3)parseFloat-----> convertirlo de un string a un numero decimal
//? ------> 4 ) Number.isInterger(---- se le mete lo que queremos evaluar)

console.log(Number.isInteger(122315235.2355)); // lanza un false

//? ------> 5) toString() ------>
const numberExample = 2353245;
console.log(numberExample.toString());
