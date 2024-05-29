import { useState } from "react"; // Importa el hook useState de React
import styled from "styled-components"; // Importa styled-components para estilizar componentes

const Button1 = styled.button`
  background-color: #f00;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
`;

function Example1() {
  return <Button1>Click me!</Button1>;
}

const Box = styled.div`
  background-color: #f00;
`;

const Text = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  margin: 0;
`;

function Example2() {
  return (
    <Box>
      <Text>¡Hola mundo!</Text>
    </Box>
  );
}

// Estiliza un formulario usando styled-components
const Form = styled.form`
  display: flex; // Usar flexbox para el layout
  flex-direction: column; // Columnas en vez de filas
`;

// Estiliza un contenedor de control de formulario
const FormControl = styled.div`
  margin-bottom: 1rem; // Espacio inferior de 1 rem
`;

// Estiliza una etiqueta de formulario
const FormLabel = styled.label`
  margin-bottom: 0.5rem; // Espacio inferior de 0.5 rem
  font-weight: bold; // Texto en negrita
`;

// Estiliza un input de formulario
const Input = styled.input`
  padding: 0.5rem; // Espaciado interno de 0.5 rem
  font-size: 1rem; // Tamaño de fuente de 1 rem
  border: 1px solid #ccc; // Borde de 1px color gris claro
  border-radius: 4px; // Bordes redondeados de 4px
`;

// Estiliza otro botón usando styled-components
const Button3 = styled.button`
  margin-top: 1rem; // Espacio superior de 1 rem
  background-color: teal; // Fondo color teal
  color: white; // Texto blanco
  padding: 0.5rem 1rem; // Espaciado interno de 0.5 rem arriba y abajo, 1 rem a los lados
  border: none; // Sin borde
  border-radius: 4px; // Bordes redondeados de 4px
  cursor: pointer; // Muestra cursor de puntero al pasar el ratón

  &:hover {
    // Estilos al pasar el ratón
    background-color: darkslategray; // Fondo gris oscuro
  }
`;

// Componente funcional Example3 que renderiza un formulario estilizado
function Example3() {
  return (
    <Form>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type='email' required />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input type='password' required />
      </FormControl>
      <Button3 type='submit'>Submit</Button3>
    </Form>
  );
}

// Otro botón estilizado
const Button5 = styled.button`
  background-color: teal; // Fondo color teal
  color: white; // Texto blanco
  padding: 0.5rem 1rem; // Espaciado interno de 0.5 rem arriba y abajo, 1 rem a los lados
  border: none; // Sin borde
  border-radius: 4px; // Bordes redondeados de 4px
  cursor: pointer; // Muestra cursor de puntero al pasar el ratón
  margin-top: 1rem; // Espacio superior de 1 rem

  &:hover {
    // Estilos al pasar el ratón
    background-color: darkslategray; // Fondo gris oscuro
  }
`;

// Estiliza un toast (mensaje emergente) usando styled-components
const Toast = styled.div`
  position: fixed; // Posición fija en la pantalla
  bottom: 1rem; // 1 rem desde el borde inferior
  right: 1rem; // 1 rem desde el borde derecho
  background-color: ${(props) =>
    props.bgColor || "green"}; // Fondo según prop o verde por defecto
  color: white; // Texto blanco
  padding: 1rem; // Espaciado interno de 1 rem
  border-radius: 4px; // Bordes redondeados de 4px
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); // Sombra alrededor del toast
`;

// Componente funcional Example5 que muestra un toast al hacer clic en un botón
function Example5() {
  const [showToast, setShowToast] = useState(false); // Estado para mostrar u ocultar el toast

  return (
    <>
      <Button5 onClick={() => setShowToast(true)}>Show Toast</Button5>
      {showToast && (
        <Toast bgColor='green' onClick={() => setShowToast(false)}>
          Account created. We've created your account for you.
        </Toast>
      )}
    </>
  );
}
function App() {
  // Declara una variable de estado llamada "count"

  return (
    <div>
      <Example1 />
      <Example2 />
      <Example3 />
      <Example5 />
    </div>
  );
}

export default App;
