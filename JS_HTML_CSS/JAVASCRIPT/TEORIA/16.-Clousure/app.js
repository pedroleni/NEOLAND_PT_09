const contador = () => {
  let x = 0;

  return {
    incremento: () => x++,
    decremento: () => x--,
    reset: () => (x = 0),
    getContador: () => x,
  };
};

const contadorClousure = contador();
contadorClousure.incremento();
contadorClousure.incremento();
contadorClousure.incremento();
contadorClousure.decremento();

const valorContador = contadorClousure.getContador();
console.log("🚀 ~ file: app.js:16 ~ valorContador:", valorContador);

const sumar = (a) => {
  return (b) => a + b;
};

const functionSumar = sumar(3);
const resultadoDeSumar = functionSumar(6); /// el 6 se corresponde con la b
const resultadoDeSumarConUnNueve = functionSumar(9);
console.log("🚀 ~ file: app.js:27 ~ resultadoDeSumar:", resultadoDeSumar);

const calculadora = (numeroIncial) => {
  return {
    restar: (b) => b - numeroIncial,
    sumar: (b) => b + numeroIncial,
  };
};

const calculadoraCompleta = calculadora(2);

const resultadoResta = calculadoraCompleta.restar(5);
console.log("🚀 ~ file: app.js:40 ~ resultadoResta:", resultadoResta);
