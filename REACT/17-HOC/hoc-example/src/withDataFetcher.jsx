/* eslint-disable react/display-name */
// withDataFetcher.jsx
import React, { useState, useEffect } from "react"; // Importamos React y los hooks useState y useEffect

// Definimos el HOC withDataFetcher que toma un componente envuelto (WrappedComponent) y una URL como argumentos
const withDataFetcher = (WrappedComponent, url) => {
  // Retornamos un nuevo componente funcional
  return (props) => {
    // Declaramos un estado 'data' con el valor inicial null
    const [data, setData] = useState(null);
    // Declaramos un estado 'isLoading' con el valor inicial true
    const [isLoading, setIsLoading] = useState(true);

    // Utilizamos useEffect para realizar un efecto secundario después de que el componente se monte
    useEffect(() => {
      // Realizamos una solicitud fetch a la URL proporcionada
      fetch(url)
        // Convertimos la respuesta en formato JSON
        .then((response) => response.json())
        // Cuando los datos son recibidos, actualizamos el estado 'data' con los datos recibidos
        .then((data) => {
          setData(data);
          // Actualizamos el estado 'isLoading' a false, ya que la carga ha terminado
          setIsLoading(false);
        });
    }, [url]); // El efecto se ejecutará cada vez que cambie la URL

    // Renderizamos el componente envuelto (WrappedComponent) pasando los datos y el estado de carga, junto con las props originales
    return <WrappedComponent data={data} isLoading={isLoading} {...props} />;
  };
};

// Exportamos el HOC para su uso en otros archivos
export default withDataFetcher;
