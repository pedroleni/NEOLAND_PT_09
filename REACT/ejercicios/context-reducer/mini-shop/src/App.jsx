// Crear un componente App para mostrar los componentes anteriores

import { CartProvider } from "./context/cartContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  return (
    <CartProvider>
      <ProductList />
      <Cart />
    </CartProvider>
  );
};
export default App;
