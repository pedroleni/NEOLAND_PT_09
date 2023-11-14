import { PrintMain } from "./src/components/ContainerMain/ContainerMain";
import { PrintFooter } from "./src/components/Footer/Footer";
import {
  PrintHeader,
  listenersNav,
} from "./src/components/HeaderComp/HeaderComp";
import "./style.css";

/* En este caso ay que pintar los componentes de la estructura basica pero como va con innerHTML 
IMPORTANTE -------> LO EVENTOS SE METEN UNA VEZ HEMOS PINTADO TODOS LOS COMPONENTES */
PrintHeader();
PrintMain();
PrintFooter();

// UNA VEZ PINTAMOS TODOS LOS COMPONENTES METEMOS LA FUNCION DE LISTENERS DEL HEADER
listenersNav();
