import { PrintMain } from "../ContainerMain/ContainerMain";
import "./HeaderComp.css";

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

export const listenersNav = () => {
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
export const PrintHeader = () => {
  document.querySelector("#app").innerHTML += template();
};
