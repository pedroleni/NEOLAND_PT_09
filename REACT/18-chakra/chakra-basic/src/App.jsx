/* eslint-disable no-unused-vars */
import {
  useDisclosure, // Hook para manejar el estado de apertura y cierre de componentes
  Button, // Componente de botón de Chakra UI
  Modal, // Componente de modal de Chakra UI
  ModalOverlay, // Componente para el fondo del modal
  ModalContent, // Componente para el contenido del modal
  ModalHeader, // Componente para el encabezado del modal
  ModalCloseButton, // Componente para el botón de cerrar el modal
  ModalBody, // Componente para el cuerpo del modal
  ModalFooter, // Componente para el pie del modal
} from "@chakra-ui/react";
import { FormControl, FormLabel, Input, useToast } from "@chakra-ui/react"; // Importa componentes de formulario y el hook useToast de Chakra UI
import { Box, Text } from "@chakra-ui/react"; // Importa componentes de caja y texto de Chakra UI

import { ChakraProvider } from "@chakra-ui/react";

function Example1() {
  return <Button colorScheme='blue'>Click me</Button>;
}

function Example2() {
  return (
    <Box bg='tomato' w='100%' fontSize='xl' color='white'>
      <Text>Hello World</Text>
      <Example1 />
    </Box>
  );
}

// Componente funcional Example3 que renderiza un formulario estilizado
function Example3() {
  return (
    <form>
      <FormControl id='email' isRequired>
        {" "}
        {/* Control de formulario para el campo de email, requerido */}
        <FormLabel>Email address</FormLabel> {/* Etiqueta del campo de email */}
        <Input type='email' /> {/* Input para el email */}
      </FormControl>
      <FormControl id='password' isRequired mt={4}>
        {" "}
        {/* Control de formulario para el campo de password, requerido, con margen superior de 4 */}
        <FormLabel>Password</FormLabel> {/* Etiqueta del campo de password */}
        <Input type='password' /> {/* Input para el password */}
      </FormControl>
      <Button mt={4} colorScheme='teal' type='submit'>
        {" "}
        {/* Botón con margen superior de 4, esquema de color teal, y tipo submit */}
        Submit
      </Button>
    </form>
  );
}

function Example4() {
  const toast = useToast(); // Hook para mostrar notificaciones tipo toast
  return (
    <Button
      onClick={() =>
        toast({
          title: "Account created.", // Título del toast
          description: "We've created your account for you.", // Descripción del toast
          status: "success", // Estado del toast (éxito)
          duration: 5000, // Duración del toast en milisegundos
          isClosable: true, // Permite cerrar el toast manualmente
        })
      }
    >
      Show Toast
    </Button>
  );
}

function Example5() {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Hook para manejar la apertura y cierre del modal
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>{" "}
      {/* Botón que abre el modal al hacer clic */}
      <Modal isOpen={isOpen} onClose={onClose}>
        {" "}
        {/* Modal que se muestra si isOpen es true y se cierra con onClose */}
        <ModalOverlay /> {/* Fondo del modal */}
        <ModalContent>
          {" "}
          {/* Contenido del modal */}
          <ModalHeader>Modal Title</ModalHeader> {/* Encabezado del modal */}
          <ModalCloseButton /> {/* Botón para cerrar el modal */}
          <ModalBody>This is the content of the modal.</ModalBody>{" "}
          {/* Cuerpo del modal */}
          <ModalFooter>
            {" "}
            {/* Pie del modal */}
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              {" "}
              {/* Botón de cerrar con esquema de color azul y margen derecho de 3 */}
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>{" "}
            {/* Botón con estilo de "ghost" */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function App() {
  return (
    <ChakraProvider>
      <Example1 />
      <Example2 />
      <Example3 />
      <Example4 />
      <Example5 />
    </ChakraProvider>
  );
}

export default App;
