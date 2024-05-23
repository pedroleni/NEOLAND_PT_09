// Necesitamos crear un contexto para manejar el estado de un carrito y compartir el mismo entre diferentes componentes
// 1. Importar createContext Y UseState
// 2. Crear un nuevo contexto CartContext
// 3. Crear un componente que provea el contexto CartProvider
// 3.1. Crear un estado para almacenar los items del carrito
// 3.2. Crear una funcion para agregar items al carrito
// 3.3. Crear una funcion para remover items del carrito
// 4. Exportar el provider
// Añadir un custom hook para consumir el contexto

import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // 3.1

  const addItem = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

// custom hook
export const useCart = () => useContext(CartContext);
