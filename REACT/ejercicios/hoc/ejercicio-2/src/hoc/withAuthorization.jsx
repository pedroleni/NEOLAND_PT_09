// withAuthorization.jsx
import React from "react";

const withAuthorization = (WrappedComponent) => {
  return ({ isAuthorized, ...props }) => {
    if (isAuthorized) {
      return <WrappedComponent {...props} />;
    } else {
      return <div>Acceso denegado</div>;
    }
  };
};
export default withAuthorization;
