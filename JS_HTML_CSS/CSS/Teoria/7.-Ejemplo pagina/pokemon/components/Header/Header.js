import "./Header.css";
//! -------------------- los componentes tienes 3 funciones principales

//? -----------> template

const template = () => ` <header>
  <h1>Mi primera pag con el DOM</h1>
  <nav>
    <button class="buttonHome">HOME</button>
    <button id="buttonDashboard">DASHBOARD</button>
    <button class="buttonProfile">PROFILE</button>
  </nav>
</header>`;

//? -----------> los escuchadores de eventos

const addlistener = () => {
  // vamos a tener los tres eventos click de los li

  const buttonHome = document.querySelector(".buttonHome");
  document.getElementById("buttonDashboard").addEventListener("click", () => {
    console.log("pincho");
  });
};
//? -----------> la funcion que pinta y se exporta

export const PrintHeader = () => {
  /// primero pintamos los elementos de html del componente para que esten accesible
  document.querySelector("#app").innerHTML += template();

  // una vez esta los elementos pintados podemos darle los eventos
  addlistener();
};
