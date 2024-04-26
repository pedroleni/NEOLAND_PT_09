import { useState, useEffect } from 'react'; // Importa useState y useEffect de React

const useFetch = (url) => {
  const [data, setData] = useState(null); // Estado para almacenar los datos cargados
  const [loading, setLoading] = useState(true); // Estado para el indicador de carga
  const [error, setError] = useState(null); // Estado para almacenar errores

  useEffect(() => { // Efecto que se ejecuta cuando cambia la URL
    setLoading(true); // Inicia la carga
    fetch(url) // Realiza la petición HTTP GET
      .then((response) => {
        if (!response.ok) { // Verifica si la respuesta es exitosa
          throw new Error('Network response was not ok'); // Lanza un error si no lo es
        }
        return response.json(); // Convierte la respuesta en JSON
      })
      .then((data) => {
        setData(data); // Actualiza el estado de los datos con los datos recibidos
        setError(null); // Limpia el estado de error
      })
      .catch((error) => {
        setError(error.message); // Captura y almacena cualquier error
      })
      .finally(() => {
        setLoading(false); // Finaliza la indicación de carga
      });
  }, [url]); // Dependencia del efecto: la URL

  return { data, loading, error }; // Retorna los estados para uso externo
};

export default useFetch; // Exporta el hook personalizado



