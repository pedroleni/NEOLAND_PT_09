const template = () => `<div id="busquedaPage"><h2>Soy busqueda 😃</h2></div>`;

export const PrintBusquedaPage = () => {
  document.querySelector("main").innerHTML = template();
};
