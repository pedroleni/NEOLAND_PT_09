// template
const template = () => `

<h2>Soy la pagina de Dashboard 💌</h2>
`;
// listeners

/// la funcion principal que se exporta y se pinta la pagina
export const PrintDasboardPage = () => {
  document.querySelector("main").innerHTML = template();
};
