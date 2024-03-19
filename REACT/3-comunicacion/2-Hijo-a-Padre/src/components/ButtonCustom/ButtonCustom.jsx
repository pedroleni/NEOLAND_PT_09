import "./buttonCustom.css";

export const ButtonCustom = ({ currentState, seteador, textButton }) => {
  // Como el estado no pertenece a ButtonCustom, hay que hacer una CALLBACK dentro del seteador del estado
  return (
    <button onClick={() => seteador((value) => value + 100)}>
      {textButton} {currentState}
    </button>
  );
};
