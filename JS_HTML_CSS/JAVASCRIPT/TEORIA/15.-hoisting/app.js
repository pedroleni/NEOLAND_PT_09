// ---> hello(); ERROR: Cannot access 'hello' before initialization  no se puede porque se crea despues

const hello = () => console.log("hola que tal "); // vite nos permite que sea tambien para las function arrow

/// ------> el hoisting lo que hace en memoria es poner primero la declaracion de las variables y las funciones
// para que luego se puedan utlizar posteriormente----> pero esto se hace en memoria
hola();
function hola() {
  console.log("hola que tal");
}
