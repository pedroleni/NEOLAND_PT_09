import {
  PrintDashboard,
  PrintLogin,
  PrintPokemonPage,
  printTemplateHangman,
} from "../pages";

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

    case "Hangman":
      printTemplateHangman();
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
