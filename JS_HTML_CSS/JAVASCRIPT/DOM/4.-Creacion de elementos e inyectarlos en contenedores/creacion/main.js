import "./style.css";

const app = document.getElementById("app");

//! -----------CREAR ELEMENTOS CON UN TEMPLATE STRING
const h1Template = `<h1>Soy un h1</h1>`;

// -----> cuando un string que queremos inyectar en el contenedor ponemos la propiedad innerHTML
app.innerHTML = h1Template;

//! ---------- CREAR ELEMENTOS CON EL METODO CREATEELEMENT

const ul = document.createElement("ul");
const h2 = document.createElement("h2");
h2.textContent = "Soy un h2";
h2.innerText = "Soy el inner Text";
// ----------> se inyecta con dos metodos --> append , appendChild

app.append(ul, h2, "hola que tal");

for (let i = 0; i < 5; i++) {
  const li = document.createElement("li");
  //li.textContent = "Soy un li";
  const texto = document.createTextNode("Soy el li");
  li.appendChild(texto);
  ul.appendChild(li);
}

// append puedo meter varios elementos y en appendChild solo puedo meter un solo hijo

const imagen = document.createElement("img");
// imagen.src =
//   "https://cloud10.todocoleccion.online/comics/tc/2023/04/25/12/407572789_tcimg_235372C7.jpg";

imagen.setAttribute(
  "src",
  "https://cloud10.todocoleccion.online/comics/tc/2023/04/25/12/407572789_tcimg_235372C7.jpg"
);

app.appendChild(imagen);

// el append nos permite meter varios elementos incluso nos permite meter texto
