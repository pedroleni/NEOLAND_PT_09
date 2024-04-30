import { useState, useMemo } from "react";
import "./App.css";

function sumaCostosa(numeros) {
  console.log("Calculando suma costosa");
  return numeros.reduce((acc, val) => acc + val, 0);
}

function ComponenteEjemplo() {
  const [numeros, setNumeros] = useState([]);
  const [contador, setContador] = useState(0);

  const suma = useMemo(() => sumaCostosa(numeros), [numeros]);

  const agregarNumero = () => {
    setNumeros([...numeros, Math.floor(Math.random() * 100)]);
  };

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={incrementarContador}>Incrementar contador</button>
      <h2>Suma: {suma}</h2>
      <button onClick={agregarNumero}>Agregar número</button>
    </div>
  );
}

export default ComponenteEjemplo;
