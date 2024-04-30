import { useState, useRef, useEffect } from "react";
import "./App.css";

function FocusInputComponent() {
  const inputRef = useRef(null); // crea una referencia mutable del input
  const counterRef = useRef(0); // crea una referencia mutable del contador
  const [count, setCount] = useState(0); // crea un estado para el contador

  useEffect(() => {
    inputRef.current.focus(); // establece el foco en el input
  }, []); // solo se ejecuta una vez

  const handleClick = () => {
    counterRef.current++; // incrementa el contador
    setCount(counterRef.current); // actualiza el estado del contador
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>busqueda</button>
      <p>Count: {count}</p>
    </>
  );
}

export default FocusInputComponent;
