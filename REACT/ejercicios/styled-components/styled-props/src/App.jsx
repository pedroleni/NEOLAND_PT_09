/* eslint-disable react/prop-types */
import styled from "styled-components";

const Button1 = styled.button`
  background-color: ${(props) =>
    props.bgColor || "blue"}; // Fondo configurable por prop
  color: ${(props) => props.color || "white"}; // Color del texto configurable
  font-size: ${(props) =>
    props.fontSize || "1.25rem"}; // Tamaño de fuente configurable
  padding: ${(props) => props.padding || "0.5rem 1rem"}; // Padding configurable
  border: none; // Sin borde
  border-radius: ${(props) =>
    props.borderRadius || "4px"}; // Bordes redondeados configurables
  cursor: pointer; // Muestra cursor de puntero al pasar el ratón
  transition: background-color 0.3s ease; // Transición suave para el fondo

  &:hover {
    background-color: ${(props) =>
      props.hoverColor || "darkblue"}; // Fondo configurable al pasar el ratón
  }
`;

function Example1({ label, ...props }) {
  return <Button1 {...props}>{label}</Button1>;
}

const Box2 = styled.div`
  background-color: ${(props) =>
    props.bgColor || "tomato"}; // Fondo configurable por prop
  width: ${(props) => props.width || "100%"}; // Ancho configurable
  padding: ${(props) => props.padding || "1rem"}; // Padding configurable
  color: ${(props) => props.color || "white"}; // Color del texto configurable
  border: ${(props) => props.border || "none"}; // Borde configurable
  box-shadow: ${(props) => props.boxShadow || "none"}; // Sombra configurable
  border-radius: ${(props) =>
    props.borderRadius || "0"}; // Bordes redondeados configurables
`;

const Text = styled.p`
  font-size: ${(props) =>
    props.fontSize || "1.25rem"}; // Tamaño de fuente configurable
`;

function Example2({ text, ...props }) {
  return (
    <Box2 {...props}>
      <Text>{text}</Text>
    </Box2>
  );
}

// Uso del componente
<Example2
  text='This is a Box'
  bgColor='tomato'
  width='100%'
  padding='1rem'
  color='white'
  border='1px solid red'
  boxShadow='0 0 10px rgba(0, 0, 0, 0.1)'
  borderRadius='8px'
  fontSize='1.25rem'
/>;

const Grid = styled.div`
  display: grid; // Usar CSS Grid para el layout
  grid-template-columns: repeat(
    ${(props) => props.columns || 3},
    1fr
  ); // Número de columnas configurable
  gap: ${(props) =>
    props.gap || "1rem"}; // Espacio entre elementos configurable
`;

const Box = styled.div`
  width: 100%;
  height: ${(props) => props.height || "100px"}; // Altura configurable
  background-color: ${(props) => props.bg || "blue"};
  display: flex;
  align-items: center; // Centra verticalmente el contenido
  justify-content: center; // Centra horizontalmente el contenido
  color: ${(props) => props.color || "white"}; // Texto blanco
  font-size: ${(props) =>
    props.fontSize || "1rem"}; // Tamaño de fuente configurable
  transition: transform 0.3s ease; // Transición suave para transform

  &:hover {
    transform: scale(1.05); // Escala el elemento al pasar el ratón
  }
`;

function Example6({ columns, gap, boxes }) {
  return (
    <Grid columns={columns} gap={gap}>
      {boxes.map((box, index) => (
        <Box key={index} {...box}>
          {box.content}
        </Box>
      ))}
    </Grid>
  );
}

// Uso del componente

function App() {
  return (
    <div>
      <Example1 label='Button 1' />
      <Example1 label='Button 2' bgColor='red' color='black' />
      <Example1 label='Button 3' bgColor='green' color='white' />
      <Example2 text='This is a Box' />
      <Example6
        columns={3}
        gap='1rem'
        boxes={[
          {
            bg: "blue",
            height: "100px",
            fontSize: "1rem",
            color: "white",
            content: "Box 1",
          },
          {
            bg: "green",
            height: "100px",
            fontSize: "1rem",
            color: "white",
            content: "Box 2",
          },
          {
            bg: "red",
            height: "100px",
            fontSize: "1rem",
            color: "white",
            content: "Box 3",
          },
        ]}
      />
      ;
    </div>
  );
}

export default App;
