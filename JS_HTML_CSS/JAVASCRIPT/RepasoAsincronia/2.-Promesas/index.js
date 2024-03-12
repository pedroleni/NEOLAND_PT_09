// PROMESA ---> algo va a pasar
// --->>>> Representa un valor que puede estar disponible ahora, en el futuro o nunca

// ESTADOS ---> pendiente, cumplida o rechazada

// Promise.all() --->> iterable, promesa que termina cuano los argumentos iterables han sido concluidos con éxito o bien rechazados
// Si se rechaza uno de los elementos -- la promesa se rechaza

//! ----> En los argumentos de la promesa recibimos si se ha cumplido o rechazado

// Estructura Promesa

const promise = new Promise((resolve, reject) => {
  resolve("Heyy esta resuelta!!!");
});

//! Cuando se resuelve o rechaza ejecuta lo que le indicamos
// const promise = new Promise((resolve, reject) => {
//   resolve(console.log("Hola"));
// });
console.log(promise);

// Try / catch --->>> permite concatenar solicitudes

const vacas = 9;

// Si tengo menos de 10 vacas la promesa la rechazo porque no tengo leche para repartir a todo el pueblo
// Si tengo más de 10 vacas la promesa se cumple porque puedo repartir a todos

const cuentaVacas = new Promise((resolve, reject) => {
  // Comprobamos la cantidad de vacas que tenemos depende de la cantidad de vacas se resuelve o rechaza

  if (vacas > 10) {
    resolve(`Nosotros tenemos ${vacas} vacas`);
  } else {
    reject("No tengo suficientes vacas");
  }
});

// console.log(cuentaVacas);

// .then(() => )  ---> cuando tengas el resultado

cuentaVacas
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    // Capturamos el error
    console.error(error);
  })
  .finally(() => console.log("Promesa acabada")); // Cuando la promesa termina ya sea cumnplida o rechazada
