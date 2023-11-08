import "./Footer.css";

//! -------------------- los componentes tienes 3 funciones principales

//? -----------> template

const template = () => `
    <footer>
        <h3>❤️ Neoland</h3>
    </footer>


`;

//? -----------> los escuchadores de eventos

const listeners = () => {};

//? -----------> la funcion que pinta y se exporta

export const PrintFooter = () =>
  (document.querySelector("#app").innerHTML += template());
