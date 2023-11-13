import "./MainComponent.css";

// ---> template

const template = () => `
<main></main>`;

// ---> listeners ----> los eventos en caso que los tenga ---> NO HAHY EVENTSS

// ---> la funcion principal que pinta que se exporta

export const PrintMain = () => {
  document.querySelector("#app").innerHTML += template();
};
