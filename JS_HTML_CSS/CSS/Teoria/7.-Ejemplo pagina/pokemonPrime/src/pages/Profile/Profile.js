// template
const template = () => `

<h2>Soy la pagina de Profile 💚</h2>
`;
// listeners

/// la funcion principal que se exporta y se pinta la pagina
export const PrintProfilePage = () => {
  document.querySelector("main").innerHTML = template();
};
