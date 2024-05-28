// Importamos React para poder utilizar JSX y otras funcionalidades de React
import React from "react";
// Importamos nuestro hook personalizado useDataFetcher desde el archivo useDataFetcher.js
import useDataFetcher from "./useDataFetcher";

// Definimos el componente funcional DataComponent que recibe la URL como prop
const DataComponent = ({ url }) => {
  // Utilizamos el hook useDataFetcher para obtener los datos y el estado de carga
  const { data, isLoading } = useDataFetcher(url);

  // Si isLoading es true, mostramos un mensaje de carga
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  // Si isLoading es false, mostramos los datos en formato JSON
  return <div>Datos: {JSON.stringify(data)}</div>;
};

// Definimos el componente funcional App
const App = () => {
  // Renderizamos el componente DataComponent pasando la URL como prop
  return (
    <div>
      <DataComponent url='https://swapi.dev/api/' />
    </div>
  );
};

// Exportamos el componente App como la exportación predeterminada del módulo
export default App;
