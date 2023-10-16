const car = {
  cilidrada: 2000,
  marca: "Ferrari",
};

//! convertimos esto a un string pero un string especial PORQUE ES UN JSON --> JSON.stringify(--- variable que queremos ---);

const pepitaCar = JSON.stringify(car);
//console.log("🚀 ~ file: app.js:9 ~ pepitaCar:", pepitaCar);

// metemos este objeto convertido en un string de tipo JSON al localstorage -->base de datos del navegador
localStorage.setItem("pepita", pepitaCar);

// --------> creamos un botton por el dom y le metemos un evento de tipo click

const button = `<button>BORRAR EL LOCALSTORAGE</button>`;

// lo añadimos al html del DOM
document.body.innerHTML = button;

// apuntamos al elemento y le añadimo es evento de tipo click
const buttonBorrar = document.querySelectorAll("button");
console.log("🚀 ~ file: app.js:23 ~ buttonBorrar:", buttonBorrar[0]);

buttonBorrar[0].addEventListener("click", () => {
  console.log("hola ");
});

// --> botton que nos va a dar lo que vale pepita en el localStorage

const buttonGetPepitaLocaStorage = `<button class="buttonGet">CUANTO VALE PEPITA EN EL LOCALSTORAGE</button>`;
document.body.innerHTML += buttonGetPepitaLocaStorage;

// le metemos el escuchador del evento

const buttonGet = document.querySelector(".buttonGet");
console.log("🚀 ~ file: app.js:36 ~ buttonGet:", buttonGet);

buttonGet.addEventListener("click", () => {
  //! localStorage.getItem()-----> es el metodo que nos trae la info del local
  const pepita = localStorage.getItem("pepita");

  // lo parseamos para poder leerlo correctamente como un object object en JS
  const parsePepita = JSON.parse(pepita);
  console.log(parsePepita);
});

// ----->SETTEAT INFO EN EL LOCAL localStorage.setItem()
// -----> TRAER INFO DEL LOCAL localStorage.getItem()
// -----> METODO PARA CONVERTIR EN STRING UN OBJETO --> JSON.stringify()
// -----> DE STRING JSON - A OBJECT OBJECT--->  JSON.parse()
// -----> BORRAR UN ELEMENTO CONCRETO  ----> localStorage.removeItem()
// -----> BORRAR TODO EL LOCALSTORAGE -----> localStorage.clear()
// -----> el localStorage guarda un texto --->
// -----> diferencia entre el localStorage y el session ---> el sesion borra cuando salimos del navegador y el local NO
