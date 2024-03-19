import { H1Custom } from "../../components/H1Custom/H1Custom";
import "./home.css";
import React, { useState } from "react";

export const Home = () => {
  // Los estados son chivatos
  const [dismount, setDismount] = useState(false);
  const [changeValue, setChangeValue] = useState(false);

  return (
    <>
      <div>Home</div>
      <p>{}</p>
      {/* Renderizado condicional */}
      {!dismount && <H1Custom title={"Soy el H1"} estadoPadre={changeValue} />}

      {/* {!dismount ? (
        <H1Custom title={"Soy el H1"} estadoPadre={changeValue} />
      ) : (
        <p>Hola</p>
      )} */}
      <button onClick={() => setDismount((value) => !value)}>
        MONTAR O DESMONTAR
      </button>
      <button onClick={() => setChangeValue((value) => !value)}>
        CAMBIA VALOR DE CHANGE VALUE
      </button>
    </>
  );

  //! --------- LAS VARIABLES A REACT LE DA IGUAL QUE CAMBIEN DE VALOR
  //! ---------
  //    const [dismount, setDismount] = useState(false);
  //    const [changeValue, setChangeValue] = useState(false);

  //    let prueba = false;
  //    return (
  //      <>
  //        <div>Home</div>
  //        {/* Renderizado condicional */}
  //        {!prueba && <H1Custom title={"Soy el H1"} estadoPadre={changeValue} />}
  //        <button onClick={() => (prueba = !prueba)}>MONTAR O DESMONTAR</button>
  //        <button onClick={() => setChangeValue((value) => !value)}>
  //          CAMBIA VALOR DE CHANGE VALUE
  //        </button>
  //      </>
  //    );
};
