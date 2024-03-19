import { useState } from "react";

import "./App.css";
import { dataRender } from "./data/infoEnlacesCustom";
import { ButtonCustom, EnlacesCustom } from "./components"; // --> traigo el componente del archivo de barril
// Lo que se llama en ll archivo de barril no debe de importarse con default

// import  dataRender  from "./data/infoEnlacesCustom"; --> las importaciones van sin llaves cuando ponemos la exportacion por defecto

const App = () => {
  const [count, setCount] = useState(100);

  return (
    <>
      <div>
        {
          // En las llaves solo se puede hacer una linea de ejecucion no se puede ¡n meter seguidas una debajo de la otra
          // Se deben de meter otras llaves y ahi meter la ejecucion
          dataRender.map((item, index) => (
            <EnlacesCustom
              //! no meter el INDEX como KEY
              key={JSON.stringify(item)}
              src={item.src}
              clase={item.clase}
              alt={item.alt}
              url={item.url}
            />
          ))
        }
        {console.log("Hola")}
      </div>
      <h1>Vite + React</h1>
      <p> {count}</p>
      <div className="card">
        {/* Es el hijo el que tiene la lógica para cambiar al estado que pertenece al padre  antes teniamos una funcion que cambiaba 
        el estado del padre dentro del padre ahora le pasamos directamente setCount y el hijo decide que logica hace y en funcion de 
        esta logica modifica al padre*/}
        <ButtonCustom seteador={setCount} textButton={"Count is"} />
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
