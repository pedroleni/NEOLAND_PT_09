// Crear un componente para mostrar los productos (ProductList.jsx)
import { useCart } from "../context/cartContext";

const productos = [
  { id: 1, title: "Producto 1", price: 100 },
  { id: 2, title: "Producto 2", price: 200 },
  { id: 3, title: "Producto 3", price: 300 },
];

const ProductList = () => {
  const { addItem } = useCart();

  return (
    <div>
      <h2>Productos</h2>
      <ul>
        {productos.map((product) => (
          // producCards
          <li key={product.id}>
            {product.title} - ${product.price}
            <button onClick={() => addItem(product)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
