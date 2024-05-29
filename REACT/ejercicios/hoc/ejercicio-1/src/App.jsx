// App.jsx
import React from "react";
import withTitle from "./hoc/withTitle";
import SimpleComponent from "./components/SimpleComponent";

const EnhancedComponent = withTitle(SimpleComponent);

const App = () => {
  return (
    <div>
      <EnhancedComponent
        title='El mejor titulo del mundo.'
        message='No hay message.'
      />
    </div>
  );
};

export default App;
