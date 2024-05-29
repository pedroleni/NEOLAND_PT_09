// App.jsx

// Ejercicio 2: Crear un HOC para controlar acceso
// Crea un HOC que reciba una prop isAuthorized. Si isAuthorized es true, muestra el componente envuelto; de lo contrario, muestra un mensaje de "Acceso denegado".

import React from "react";
import withAuthorization from "./hoc/withAuthorization";
import SecretComponent from "./components/SecretComponent";

const AuthorizedComponent = withAuthorization(SecretComponent);

const App = () => {
  return (
    <div>
      <AuthorizedComponent isAuthorized={true} />
      <AuthorizedComponent isAuthorized={false} />
    </div>
  );
};

export default App;
