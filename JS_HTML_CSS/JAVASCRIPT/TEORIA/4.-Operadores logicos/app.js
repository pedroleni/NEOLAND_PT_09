// operador AND ------>
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// operador OR -------> ||

console.log(true || true); // TRUE
console.log(true || false); // TRUE
console.log(false || true); // TRUE
console.log(false || false); // FALSE

// operador NOT--------> ! ---> convierte a BOOLEANO Y DAR EL CONTRARIO

console.log(!2);

//

let age = 21;

age >= 18 && console.log("soy mayor de edad"); // -----> es parecido a un if--->
age >= 18 ? console.log("soy mayor de edad") : console.log("soy menor de edad"); // --> ternario: estructura conficion

if (age >= 18) {
  console.log("soy mayor de edad");
} else console.log("soy menor de edad");
