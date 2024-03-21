import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ButtonCustom } from "./components/ButtonCustom/ButtonCustom";

const App = () => {
  // Lo que hay dentro del parentesis es el valor con el que se inicia el estado
  // estructura es const [nombreVariable, setNombreVariable] = useState(valor con el que se inicia el estado)
  const [contador, setContador] = useState(-10); //! ------ ESTO ES EL ESTADO

  // Si el estado pertenece al componente la funcion set no hace falta que lleve una callback

  /**Pero si el estado no pertenece al componente que lo usa, sino que esta declarado en otro componenete
   (compartir informacion entre componentes) entonces es recomendable por asincronia poner una callback y acceder 
   en su parametro al valor actual del estado
   **/

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>El contador vale {contador}</h2>
      <div className="card">
        {/* Como el estado pertenece a este componente el seteador del estado puede ir sin callback */}
        <button onClick={() => setContador(contador + 2)}>Sin callbak</button>

        {/* Aqui aunque el estado pertenezca al componenete lo podemos setear con la callback */}
        {/* El valor de la callback es el valor que tiene el estado antes de cambiarse */}
        <button onClick={() => setContador((preValue) => preValue + 3)}>
          Con callback
        </button>
        {/* Le pasamos por props la funcion seteadora del estado y el estado */}
        <ButtonCustom
          funcionseteadoraEstado={setContador}
          valorEstado={contador}
        />
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
