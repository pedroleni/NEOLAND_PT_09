import React from "react";

import "./App.css";
import { Home } from "./pages";

// Los componentes van en mayusculas
export const App = () => {
  return (
    // La etiqueta vacia de contenido se llama fragment
    <>
      <Home />
    </>
  );
};

// export default App; //! Sin llaves a la hora de importar
