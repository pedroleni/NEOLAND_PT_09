import "./Header.css";
//? 1) Funcion que da el template del componente
const template = () => `
  <header>
    <h1>Mi primera pagina</h1>
    <nav>
      <button class="btn-home">HOME</button>
      <button class="btn-dashboard">DASHBOARD</button>
      <button class="btn-profile">PROFILE</button>
    </nav>
  </header>
`;

//? 2) Funcion que da los escuchadores del template
const listeners = () => {
  // EVENTO BTN HOME
  const buttonHome = document.querySelector(".btn-home");
  buttonHome.addEventListener("click", () => {
    console.log("Pincho en btn home");
  });

  // EVENTO BTN DASHBOARD
  const buttonDashboard = document.querySelector(".btn-dashboard");
  buttonDashboard.addEventListener("click", () => {
    console.log("pincho en el dashboard");
  });

  // EVENTO PROFILE
  const buttonProfile = document.querySelector(".btn-profile");
  buttonProfile.addEventListener("click", () => {
    console.log("pincho en el profile");
  });
};

//? 3) Funcion que pinta el componente
export const PrintHeader = () => {
  /// IMPORTANTE --->
  document.querySelector("#app").innerHTML += template();
  listeners();
};
