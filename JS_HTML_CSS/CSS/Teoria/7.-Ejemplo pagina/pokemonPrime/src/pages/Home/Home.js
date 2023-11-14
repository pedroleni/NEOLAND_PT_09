// template
const template = () => `
<h2>Soy la pagina home</h2>


`;
// listeners

/// la funcion principal que se exporta y se pinta la pagina
export const PrintHomePage = () => {
  // ----->document.querySelector("main").innerHTML = "" ----> esto sirve para borrar el contenedor
  document.querySelector("main").innerHTML = template();
};
