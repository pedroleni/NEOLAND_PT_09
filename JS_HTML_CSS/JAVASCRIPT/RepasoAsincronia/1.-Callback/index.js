const sum = (num1, num2) => {
  return num1 + num2;
};

// La creamos
const calc = (num1, num2, callback) => {
  return callback(num1, num2);
};

//** La callback se puede llamar de cualquier forma */
// const calc = (num1, num2, func) => {
//   return func(num1, num2);
// };

// LLamamos a la función
console.log("suma", calc(1, 2, sum));
// La funcion sum (callback) no hace falta ejecutarla ya esta ejecutada en el return
// No le pasamos parámetros porque los recibe en la función calc

const multi = (num1, num2) => {
  return num1 * num2;
};

console.log("multiplicación", calc(2, 2, multi));

// Ejecuta la función enun determinado tiempo
// tiene una callback anónima
// Pasados los segundos determinados ejecuta la función
// Con callback
setTimeout(() => {
  console.log("Hola Js");
}, 2000);

//! Función ARROW con CALLBACK DENTRO
// const saludo = (name) => {
//     () => {

//     }
// };

//! Function clasica
function name(params) {}

const saludo = (name) => {
  console.log(`Hola ${name}`);
};

saludo("Pepito");

// SetTimeout sin callback --> implicito

setTimeout(saludo, 4000, "Gemma");

//! Igual que el setTimeout de arriba
// setTimeout(() => {
//   saludo("Gemma");
// }, 4000);
