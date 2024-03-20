import React, { useEffect } from "react";

//!----- debemos tener los useEffect necesarios
//!----- pero que cada uno haga un efecto de renderizado

//! --- los useEffect estan escuhado cuando se monta o demonta un componente o en el tercer caso
//! --- tambien esta escuchando el estado del array de dependecias
export const H1Custom = ({ title, estadoPadre }) => {
  //! ----- aqui fuera antes del return se puede tener una funcion creada pero si la ejecutamos pasa como con el segundo useEffect
  //! ----- que se lanza cada vez que haya un cambio en los estados
  const creandFuncion = () => {
    console.log("Me monto 🍀");
  };
  // Estructura es una useCallback, lo que se ejecuta dentro y un array de dependecias
  //Controla cuando se monta y desmonta -- el desmontaje se controla en el return
  // TIENE ARRAY DE DEPENDENCIAS
  //console.log("Hola me lanzo");
  useEffect(() => {
    //creandFuncion();

    return () => {
      //console.log("Me desmonto ❌");
    };
  }, []);

  //! ----- PROHIBIDO
  // Siempre se lanza y crea problemas serios de performance porque se lanza de forma infinita
  // NO TIENE ARRAY DE DEPENDENCIAS
  useEffect(() => {
    //  console.log("Me monto 🍀");

    return () => {
      //  console.log("Me desmonto ❌");
    };
  });

  //El que tiene unas variables en el array de dependencias --->
  // Cuando cambia el valor de estas variables se ejecuta lo que hay dentro del useEffect
  // --> efecto decundario
  useEffect(() => {
    creandFuncion();
    console.log("Se actualiza changeValue");

    // return () => {};
  }, [estadoPadre]);

  return <h1>{title}</h1>;
};
