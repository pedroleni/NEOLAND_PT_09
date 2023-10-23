//! TIMEOUTS ------------------- es una atras que primero tiene una callback y luego el tiempo en el que queremos...
//! ...que se lance la callback ---> solo se ejecuta una vez

setTimeout(() => {
  //console.log("han pasado 10 segundos 🔍");
}, 10000); // MILISEGUNDOS 1000 MILISEGUNDOS = 1 SEGUNDO

//! INTERVAL  =   cada x intervalos de tiempo se ejecuta un codigo de JS (que se incluye en una callback)

let intervalId;

let segundos = 0;

const decirAdios = () => {
  setTimeout(() => {
    console.log("hasta pronto");
  }, 1000);
};

intervalId = setInterval(() => {
  if (segundos === 5) {
    clearInterval(intervalId);
    decirAdios();
  }
  console.log(segundos);
  segundos++;
}, 1000);

/// para parar la ejecucion de un interval en la terminal antes de la condicion de cierre se hace con un letras contro+c
