//! --------------------------------  if  -else----------------------

let age = 18;

if (age >= 18) {
  console.log("eres mayor de edad");
} else {
  console.log("eres menor de edad");
}

if (age === 21) console.log(" tienes 21 años");

//! --------------------------------if else-------------------

const moneyExample = 30000;

if (moneyExample < 1000) {
  console.log("PRONTO TIENES ORDENADOR NUEVO 💖"); /// ----> cuando ya entra en la primera ya no entra en la segunda condicion
} else if (moneyExample == 10000) {
  console.log("dame un dinerillo 💌");
} else if (moneyExample == 20000) {
  console.log("dame un dinerillo 💌x2");
} else {
  console.log("no sabemos que tienes en tu cuenta, confiesa ❌");
}

// ---------------> conversion a un ternario

moneyExample < 1000
  ? console.log("PRONTO TIENES ORDENADOR NUEVO 💖")
  : moneyExample == 10000
  ? console.log("dame un dinerillo 💌")
  : console.log("no sabemos que tienes en tu cuenta, confiesa ❌");

//! --------------------------------- switch -----------------

// --------> el switch valora el valor de la variable age
switch (age) {
  case 18:
    console.log("ya eres mayor de edad");
    break;
  case 21:
    console.log("tienes 21 años");
    break;
  default:
    break;
}

// es una funcion que recibe un parametro edad ---> y esta edad cuando yo llame a la funcion se puede llamar la variable como queramos
const valorarEdad = (edad) => {
  switch (edad) {
    case 18:
      return "eres mayor de edad";

    case 21:
      return "tienes 21 años 💥";

    default:
      break;
  }
};

/// ------> hacemos las funciones que sean reutilizables ...> desacopladas: se pueden utilizar para variables difernetes con casos similares

/// en esta llamada a la funcion meto el parametro age, de dentro de la funcion se va a llamar edad
console.log(valorarEdad(age));

let ageArturo = 21;
let returnFuncionValorar = valorarEdad(ageArturo);
console.log(
  "🚀 ~ file: app.js:45 ~ returnFuncionValorar:",
  returnFuncionValorar
);

//! ---------------------------------- ternario --------------
// condicion ? cuandoSeCumplaLaCondicion : cuandoNOseCumplaLaCondicion

let money = 100;

money > 10000
  ? console.log("tiene para comprarte un nuevo ordenador") // cuando  es true --> la condicion se cumple
  : console.log("tiene seguir ahorrando"); // cuando es false --> la condicion no se cumple

//! ---------------------------------- && ----> OPERADOR AND:

money > 10000 && console.log("tiene para comprarte un nuevo ordenador");
!(money > 10000) && console.log("tiene seguir ahorrando"); // CON EL OPERADOR NOT
money < 10000 && console.log("tiene seguir ahorrando"); // SIN EL OPERADOR NOT

// ----> RECORDAR EL NOT --> CONVERTE A BOOLEANO Y LO HACE EN SU VERSION CONTRARIA

// SI LA CONDICION ES TRUE SIGUE LA EJECUCION  Y SACAMNOS LO QUE VIENE DESPUES DE &&
