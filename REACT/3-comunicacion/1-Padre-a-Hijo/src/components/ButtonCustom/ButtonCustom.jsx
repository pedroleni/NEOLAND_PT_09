import "./buttonCustom.css";

export const ButtonCustom = ({ currentState, seteador, textButton }) => {
  //!----------- HIJO
  // PADRE - HIJO --> el Padre se modifica a si mismo con su funcion
  // Aunqe se ejecute desde el hijo la funcion no pertenece a ButtonCustom

  return (
    // El hijo ejecuta la funcion
    <button onClick={() => seteador()}>
      {textButton} {currentState}
    </button>
  );
};
