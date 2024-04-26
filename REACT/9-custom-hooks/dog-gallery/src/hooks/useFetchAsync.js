import { useState, useEffect } from 'react'; // Importa useState y useEffect de React

/**
 * Hook personalizado para realizar peticiones HTTP GET.
 * @param {string} url La URL a la que hacer la petición.
 * Gestiona estados de datos, carga, y error.
 */
const useFetch = (url) => {
  const [data, setData] = useState(null); // Estado para almacenar los datos obtenidos de la API
  const [loading, setLoading] = useState(true); // Estado para controlar la visualización del indicador de carga
  const [error, setError] = useState(null); // Estado para manejar errores durante la petición

  useEffect(() => { // Efecto que se ejecuta cada vez que cambia la URL
    const fetchData = async () => { // Función asíncrona para realizar la petición
      setLoading(true); // Se activa el indicador de carga antes de realizar la petición
      try {
        const response = await fetch(url); // Espera a que la petición fetch sea completada
        if (!response.ok) { // Si la respuesta no es exitosa, lanza un error
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json(); // Espera a que el contenido de la respuesta sea convertido a JSON
        setData(jsonData); // Establece el estado de los datos con los datos obtenidos
        setError(null); // Reinicia cualquier error previo a null
      } catch (error) {
        setError(error.message); // Establece el estado de error con el mensaje de error capturado
      } finally {
        setLoading(false); // Desactiva el indicador de carga al finalizar la petición, ya sea exitosa o no
      }
    };

    fetchData(); // Llama a la función fetchData para ejecutar la petición
  }, [url]); // La dependencia de useEffect es la URL, el efecto se re-ejecutará si esta cambia

  return { data, loading, error }; // Retorna los estados para ser usados por otros componentes
};

export default useFetch; // Exporta el hook useFetch para su uso en otros archivos
