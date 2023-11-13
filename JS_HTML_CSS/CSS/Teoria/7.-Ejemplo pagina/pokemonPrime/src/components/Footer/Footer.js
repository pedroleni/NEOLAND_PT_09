import "./Footer.css";

// template
const template = () => `<footer><h3>Soy el footer 👌</h3></footer>`;

// listeners ----> no tenemos porque no hay botones

// funcion principal que pinta y se exporta

export const PrintFooter = () => {
  document.querySelector("#app").innerHTML += template();
};
