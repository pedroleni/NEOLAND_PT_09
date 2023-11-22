// ------> APUINTAR POR UN ID

const app = document.querySelector("#app");
app.innerHTML = "hola";
const appById = document.getElementById("app");

// ------> SELECCIONAR POR CLASE
const clase = document.querySelector(".clase");
clase.innerHTML = `<p>Soy el hijo de la clase</p>`;
const classByClass = document.getElementsByClassName("clase");
console.log("🚀 ~ file: main.js:12 ~  classByClass:", classByClass[0]);

// -----> SELECCIONAR POR ETIQUETA
const etiquetaBassica = document.querySelector("ul");

const etiquete = document.getElementsByTagName("ul");
//console.log("🚀 ~ file: main.js:16 ~ etiquete:", etiquete[0]);

// ----> seleccionar un conjunto de elementos

const allLi = document.querySelectorAll("li");
console.log("🚀 ~ file: main.js:22 ~ allLi:", allLi);

//-----------> el nodelist solo se puede recorrer con un forEach

// -----> esto falla ----> allLi.map((item) => console.log(item));

allLi.forEach(
  (item, index) => (item.textContent = `Soy el li con el index ${index}`)
);

// si ponemos el += se queda con lo que hemos metido en el forEach y añade nuevo contenido
for (let i = 0; i < allLi.length; i++) {
  allLi[i].textContent += " Esto es en el for normal";
}
