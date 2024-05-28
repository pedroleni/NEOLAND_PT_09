// App.jsx
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
