import { useState, useEffect } from "react";

function Reloj() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setHora(new Date());
    }, 1000);
    console.log("🚀 ~ timerId ~ timerId:", timerId);
    return () => {
      clearInterval(timerId);
    };
  }, [hora]);

  return <h2>{hora.toLocaleTimeString()}</h2>;
}

export default Reloj;
