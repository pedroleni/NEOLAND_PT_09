PrintMain;
import { PrintMain } from "./src/components/ContainerMain/ContainerMain";
import { PrintFooter } from "./src/components/Footer/Footer";
import {
  PrintHeader,
  listenersNav,
} from "./src/components/HeaderComp/HeaderComp";
import "./style.css";

PrintHeader();
PrintMain();
PrintFooter();
listenersNav();
