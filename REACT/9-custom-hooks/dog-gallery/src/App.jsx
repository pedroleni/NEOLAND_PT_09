import React, { useState } from "react"; // Importa React y el hook useState
import useFetch from "./hooks/useFetch"; // Importa el hook useFetch personalizado
import "./App.css"; // Importa estilos CSS para la aplicación

const App = () => {
  const [url, setUrl] = useState("https://api.thedogapi.com/v1/images/search"); // Estado inicial de la URL para cargar imágenes de perros
  const { data, loading, error } = useFetch(url); // Utiliza useFetch para cargar datos desde la URL

  const refreshImages = () => {
    // Función para recargar imágenes
    setUrl(
      `https://api.thedogapi.com/v1/images/search?timestamp=${Date.now()}`
    ); // Actualiza la URL con un parámetro de tiempo para forzar la recarga
  };

  return (
    <div className="App">
      <h1>Random Dog Gallery</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          {data.map(
            (
              dog,
              index // Mapea y muestra cada imagen de perro recibida
            ) => (
              <img
                key={index}
                src={dog.url}
                alt="Random Dog"
                style={{ width: "300px", height: "300px", margin: "10px" }}
              />
            )
          )}
        </div>
      )}
      <button onClick={refreshImages}>Load New Dog</button>
    </div>
  );
};

export default App; // Exporta el componente App
