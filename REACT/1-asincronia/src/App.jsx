import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0); // como get y set
  // valor actual, seteador de valor

  const cambiarEstado = () => {
    setCount((valorActual) => {
      return valorActual + 1;
    });

    /* por la asincronia en este caso no teneemos acceso al valor actualizado de count*/
    console.log("valor del count en la siguiente linea de act", count);
  };

  return (
    <>
      {/** la etique vacia dde contenido y nombre de arrriba se llama fragment
       * este fragment se pone como elemento padre y no tiene ningun valor en el html
       * esto es debido a que necesita un elemento padre - elemento primario-
       * para poder renderizar el template
       *
       */}
      <div>
        {console.log("valor del count en el return", count)}
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => cambiarEstado()}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
