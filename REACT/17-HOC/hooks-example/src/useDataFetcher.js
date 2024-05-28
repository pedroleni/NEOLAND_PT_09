// useDataFetcher.js

// Importamos los hooks useState y useEffect desde React
import { useState, useEffect } from 'react';

// Definimos un hook personalizado llamado useDataFetcher que toma una URL como argumento
const useDataFetcher = (url) => {
  // Declaramos el estado 'data' con el valor inicial null
  const [data, setData] = useState(null);
  // Declaramos el estado 'isLoading' con el valor inicial true
  const [isLoading, setIsLoading] = useState(true);

  // Utilizamos useEffect para realizar un efecto secundario después de que el componente se monte
  useEffect(() => {
    // Realizamos una solicitud fetch a la URL proporcionada
    fetch(url)
      // Convertimos la respuesta en formato JSON
      .then(response => response.json())
      // Cuando los datos son recibidos, actualizamos el estado 'data' con los datos recibidos
      .then(data => {
        setData(data);
        // Actualizamos el estado 'isLoading' a false, ya que la carga ha terminado
        setIsLoading(false);
      });
  }, [url]); // El efecto se ejecutará cada vez que cambie la URL

  // Retornamos un objeto con 'data' e 'isLoading'
  return { data, isLoading };
};

// Exportamos el hook useDataFetcher para su uso en otros archivos
export default useDataFetcher;
