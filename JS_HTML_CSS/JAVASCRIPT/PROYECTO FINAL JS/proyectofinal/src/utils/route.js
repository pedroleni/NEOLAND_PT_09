import { PrintDashboard, PrintLogin, PrintPokemonPage } from "../pages";

export const initControler = (paginaQueVamosAPintar) => {
  switch (paginaQueVamosAPintar) {
    case undefined:
      localStorage.getItem("user") ? PrintDashboard() : PrintLogin();
      break;
    case "Pokemon":
      PrintPokemonPage();
      break;

    case "Dashboard":
      PrintDashboard();
      break;

    case "Topo":
      // la funcion qur pinta la pagina PrintPageTopo()
      break;
    case "Memory":
      // la funcion qur pinta la pagina PrintPageMemoryGame()
      break;

    default:
      break;
  }
};
