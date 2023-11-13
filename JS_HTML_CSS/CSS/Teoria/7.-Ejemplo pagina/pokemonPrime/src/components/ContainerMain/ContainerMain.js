import "./ContainerMain.css";

const template = () => `

<main></main>
`;

export const PrintMain = () => {
  document.querySelector("#app").innerHTML += template();
};
