import React from "react";

export const ButtonCustom = ({ funcionseteadoraEstado, valorEstado }) => {
  return (
    // Aqui el seteador del estado y el estado pertenecen al padre entonces metemos la callback para evitar asincronias
    <button
      onClick={() =>
        funcionseteadoraEstado((valorActualEstado) => {
          {
            // El consolelog muestra el estado anterior porque se ejecuta antes de cambiarse
            /* El valor de la callback es el valor que tiene el estado antes de cambiarse */
          }
          console.log("valor actual antes de cambiarse", valorActualEstado);
          return valorActualEstado >= 10 ? -1 : valorActualEstado + 4;
        })
      }
    >
      count is {valorEstado}
    </button>
  );
};
