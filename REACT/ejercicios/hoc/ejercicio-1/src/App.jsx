// App.jsx
import React from "react";
import withTitle from "./hoc/withTitle";
import SimpleComponent from "./components/SimpleComponent";

const EnhancedComponent = withTitle(SimpleComponent);

const App = () => {
  return (
    <div>
      <EnhancedComponent
        title='Título dinámico'
        message='Este es un mensaje simple.'
      />
    </div>
  );
};

export default App;
