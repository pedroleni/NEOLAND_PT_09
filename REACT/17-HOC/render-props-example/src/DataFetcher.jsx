// Importamos React y los hooks useState y useEffect desde la biblioteca 'react'
import React, { useState, useEffect } from "react";

// Definimos el componente funcional DataFetcher que recibe dos props: 'url' y 'render'
const DataFetcher = ({ url, render }) => {
  // Definimos dos estados locales usando el hook useState
  // 'data' almacenará los datos obtenidos de la URL
  // 'isLoading' indicará si la solicitud está en curso
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Utilizamos el hook useEffect para realizar una acción secundaria cuando el componente se monta o la URL cambia
  useEffect(() => {
    // Realizamos una solicitud fetch a la URL proporcionada
    fetch(url)
      // Convertimos la respuesta a formato JSON
      .then((response) => response.json())
      // Cuando se reciben los datos, actualizamos el estado 'data' y marcamos la carga como completa
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, [url]); // El efecto se ejecuta cada vez que la URL cambia

  // Retornamos el resultado de invocar la función 'render' pasando 'data' e 'isLoading' como argumentos
  return render({ data, isLoading });
};

// Exportamos el componente DataFetcher como exportación predeterminada del módulo
export default DataFetcher;
