let dog = "Rodolfo ";

//?------------ formas de concatenar la informacion

/// ------> 1 ) Forma mas antigua con el +

const apellido = dog + "Lopez ";
console.log("🚀 ~ file: app.js:9 ~ apellido:", apellido);

///-------> 2) Forma mas moderna con los template string y las comillas francesas

const nombreCompleto = `${dog} Lopez Egea`;
console.log("🚀 ~ file: app.js:14 ~ nombreCompleto:", nombreCompleto);

const h1Component = `<h1>${dog}</h1>`; /// nos sirve para inyectar html desde JS

const data = [
  {
    name: "Hp oem 2023",
    image:
      "https://wdixital.com/wp-content/uploads/hp-probook-640-g2-500x500.jpg",
  },
  {
    name: "Mac",
    image:
      "https://wdixital.com/wp-content/uploads/hp-probook-640-g2-500x500.jpg",
  },
  {
    name: "Iphone",
    image:
      "https://wdixital.com/wp-content/uploads/hp-probook-640-g2-500x500.jpg",
  },
];
// callback
data.forEach((producto, index) => {
  // ------> COmpoenente --------->
  const cardComponent = `
    <figure>
      <h1>${producto.name}</h1>
      <img src=${producto.image} alt="" />
    </figure>
  `;
  //const app = document.querySelector(".app");

  // inyectamos el compoente en el div app que hemos seleccionado antes con el querySelector
  //app.innerHTML += cardComponent;
});

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
