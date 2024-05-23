// Crear un componente para mostrar los productos en el carrito (Cart.jsx)

import { useCart } from "../context/cartContext";

const Cart = () => {
  const { cart, removeItem } = useCart();

  return (
    <div>
      <h2>Carrito</h2>
      <ul>
        {cart.map((product) => (
          <li key={product}>
            {product.title} - ${product.price}
            <button onClick={() => removeItem(product.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cart;
