/* eslint-disable no-case-declarations */
// Dado un template de una tienda online con una serie de productos, necesitamos que estos productos puedan añadirse a nuestra cesta de la compra.

// Para ello vamos a utilizar el context, de esta manera se compartirá la información de la cesta entre diferentes componentes

import React, { createContext, useReducer, useContext } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

// Definimos nuestra funcion reductora con 2 parametros, el estado y la accion
const cartReducer = (state, action) => {
  console.log("🚀 ~ cartReducer ~ action:", action);
  switch (action.type) {
    case "ADD_TO_CART":
      const itemIndex = state.findIndex(
        (item) => item.id === action.product.id
      );
      if (itemIndex === -1)
        // añadir un nuevo producto
        return [...state, { ...action.product, quantity: 1 }];

      // actualizar la cantidad del producto
      const newState = [...state];
      newState[itemIndex] = {
        ...newState[itemIndex],
        quantity: newState[itemIndex].quantity + 1,
      };

      return newState;

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.productId);
    default:
      return state;
  }
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};

export const CartProvider = ({ children, name }) => {
  console.log("🚀 ~ CartProvider ~ name:", name);
  const [cart, dispatch] = useReducer(cartReducer, []); // Inicializamos nuestro estado con un array vacio y le añadimos nuesta funcion reductora (CartReducer)

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Creamos un hook para poder consumir nuestro contexto
export const useCart = () => useContext(CartContext);
