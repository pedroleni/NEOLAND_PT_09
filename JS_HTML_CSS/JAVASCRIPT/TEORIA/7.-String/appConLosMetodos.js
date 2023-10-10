//? ----------------> metodos y propiedades-------------------------------------------------
// ------>1) acceso a los caracteres
let exampleString = "Esto es un Ejemplo";
console.log(exampleString[0]); // ------> FORMA 1
console.log(exampleString.charAt(1)); //->FORMA 2

// ------> 2) PROPIEDAD DE LA LONGITUD
console.log(exampleString.length);

// ------>) 3) includes
console.log(exampleString.includes("s")); // ----> devuelve un true
console.log(exampleString.includes("w")); // ----> devuelve un false

// ------>) 4) repeat
console.log(exampleString.repeat(4)); // nos devuelve un string con las veces repetidas y se puede guardar en una variable

// ------>) 5) replaceAll
let fragmentoQuixote = "En- un- lugar- de- la- mancha-....";
// ----> parametros del metodo:
// -----------> 1) lo que quiero remplazar
// -----------> 2) por lo que quieres remplazarlo
let okText = fragmentoQuixote.replaceAll("-", "");
console.log("🚀 ~ file: app.js:68 ~ okText:", okText); //En un lugar de la mancha....

// ------>) 6) Slice
// ------ posi
console.log(exampleString.slice(0, 6));

// ------>) 7) Split
console.log(exampleString.split(" ")); // [ 'esto', 'es', 'un', 'ejemplo' ]

// ------>) 8) toLowerCase()

console.log(exampleString.toLocaleLowerCase());

// ----->) 9) toUpperCase()
console.log(exampleString.toUpperCase());

// ----->) 10) trim ---> quita espacios

console.log(exampleString.trim());

//todo ------------------------------------------------------------------------------

const email = "escaneruclm@gmail.com";

const arraySplit = email.split("@");
console.log("🚀 ~ file: app.js:96 ~ arraySplit:", arraySplit[0]);
