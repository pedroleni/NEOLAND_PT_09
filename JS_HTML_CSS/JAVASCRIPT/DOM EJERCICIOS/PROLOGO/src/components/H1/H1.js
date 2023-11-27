import "./H1.css";
const template = () => `<h1>Soy un h1</h1>
<button class="button">MODO OSCURO</button>`;

// listeners --> no webkit-hyphenate-character:
const listener = () => {
  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
};
export const PrintH1 = () => {
  document.getElementById("app").innerHTML += template();
  listener();
};
