import "./style.css";

const app = document.getElementById("app");

const hijos = app.childNodes;
//console.log("🚀 ~ file: main.js:6 ~ hijos:", hijos);

const segundoHijo = hijos[1];
//console.log("🚀 ~ file: main.js:9 ~ segundoHijo:", segundoHijo);

const hijosDelSegundo = segundoHijo.childNodes;
//console.log("🚀 ~ file: main.js:12 ~ hijosDelSegundo:", hijosDelSegundo);

// metodo que nos devuelve un boolean para saber si tenemos unos hijos o no
console.log(segundoHijo.hasChildNodes());

/// veer desde el hijo quien es su paint-order:

const padre = segundoHijo.parentNode;
console.log("🚀 ~ file: main.js:20 ~  padre:", padre);

/// --------> DE ESTA FORMA BORRAMOS EL CONTENEDOR PADRE ---> BORRAMOS SUS HIJOS
padre.innerHTML = "";
