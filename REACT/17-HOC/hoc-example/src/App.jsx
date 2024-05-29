// Importamos nuestro HOC (Higher-Order Component) llamado withDataFetcher
import withDataFetcher from "./withDataFetcher";

// Definimos el componente funcional DataComponent
// Este componente recibe 'data' e 'isLoading' como props
const DataComponent = ({ data, isLoading }) => {
  // Si isLoading es true, renderizamos un mensaje de carga
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  // Si isLoading es false, renderizamos los datos en formato JSON
  return <div>Datos: {JSON.stringify(data)}</div>;
};

// Creamos un nuevo componente llamado EnhancedDataComponent
// Utilizamos el HOC withDataFetcher para envolver DataComponent
// Le pasamos DataComponent y la URL desde donde obtendremos los datos
const EnhancedDataComponent = withDataFetcher(
  DataComponent,
  "https://swapi.dev/api/"
);

// Definimos el componente funcional App
const App = () => {
  // Renderizamos el componente EnhancedDataComponent dentro de un <div>
  return (
    <div>
      <EnhancedDataComponent />
    </div>
  );
};

// Exportamos el componente App como la exportación predeterminada del módulo
export default App;
