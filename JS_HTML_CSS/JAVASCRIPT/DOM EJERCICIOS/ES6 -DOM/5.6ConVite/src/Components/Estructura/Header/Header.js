import { PrintNav } from "../../Nav/Nav";
import "./Header.css";

const template = () => `<header>
<h1>Soy el header</h1>
</header>`;

export const PrintHeader = () => {
  document.getElementById("app").innerHTML += template();
  PrintNav();
};
