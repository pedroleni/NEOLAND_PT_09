import "./style.css";

const h1 = document.createElement("h1");
h1.textContent = "Soy el h1";
h1.classList.add("h1Custom", "segundaClase");

const app = document.querySelector("#app");
app.append(h1);

const buttonDarkMode = document.createElement("button");
buttonDarkMode.textContent = "CAMBIAR AL MODO OSCURO";
buttonDarkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const buttonRemoveDarkMode = document.createElement("button");
buttonRemoveDarkMode.textContent = "QUITAR MODO OSCURO";
buttonRemoveDarkMode.addEventListener("click", () => {
  // el contain nos devuelve un boolean si contiene o no la clase que le damos
  console.log(document.body.classList.contains("dark"));
  document.body.classList.remove("dark");
  document.body.id = "soyElId";
});

app.append(buttonDarkMode, buttonRemoveDarkMode);
