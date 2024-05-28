// Importamos React desde la biblioteca 'react'
import React from "react";
// Importamos el componente DataFetcher desde el archivo './DataFetcher.js'
import DataFetcher from "./DataFetcher";

// Definimos el componente funcional App
const App = () => {
  // Renderizamos el componente DataFetcher
  return (
    <div>
      {/* Llamamos al componente DataFetcher y pasamos dos props: 'url' y 'render' */}
      {/* 'url' especifica la URL de la que se obtendrán los datos */}
      {/* 'render' es una función de representación que recibe los datos y el estado de carga */}
      <DataFetcher
        url='https://swapi.dev/api/' // Especificamos la URL de la API
        render={({ data, isLoading }) => {
          // La función de renderizado recibe 'data' e 'isLoading' como argumentos
          if (isLoading) {
            // Si isLoading es true, mostramos un mensaje de carga
            return <div>Cargando...</div>;
          }

          // Si isLoading es false, mostramos los datos en formato JSON
          return <div>Datos: {JSON.stringify(data)}</div>;
        }}
      />
    </div>
  );
};

// Exportamos el componente App como la exportación predeterminada del módulo
export default App;
