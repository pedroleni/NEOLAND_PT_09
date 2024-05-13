import React, { useContext, useState, createContext } from "react";

// Paso 1: Crear el Contexto
const ColorContext = createContext(); // Este es el contexto que se va a compartir

// Paso 2: Crear un componente proveedor
const ColorProvider = ({ children }) => {
  // Este es el componente que va a proveer el contexto
  const [color, setColor] = useState("red");
  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};

// Paso 3: Crear un componente consumidor
const ColorDisplay = () => {
  const { color } = useContext(ColorContext);
  return <div style={{ color }}>El color es: {color}</div>;
};

// Paso 4: Usar el proveedor en la aplicación principal
function App() {
  return (
    <ColorProvider>
      <ColorDisplay />
    </ColorProvider>
  );
}

export default App;
