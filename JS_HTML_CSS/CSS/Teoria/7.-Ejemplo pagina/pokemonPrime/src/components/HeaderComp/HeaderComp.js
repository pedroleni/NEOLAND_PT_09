import { PrintDasboardPage } from "../../pages/Dashboard/Dashboard";
import { PrintHomePage } from "../../pages/Home/Home";
import { PrintProfilePage } from "../../pages/Profile/Profile";
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
    PrintHomePage();
  });

  // EVENTO BTN DASHBOARD
  const buttonDashboard = document.querySelector(".btn-dashboard");
  buttonDashboard.addEventListener("click", () => {
    PrintDasboardPage();
  });

  // EVENTO PROFILE
  const buttonProfile = document.querySelector(".btn-profile");
  buttonProfile.addEventListener("click", () => {
    PrintProfilePage();
  });
};
export const PrintHeader = () => {
  document.querySelector("#app").innerHTML += template();
};
