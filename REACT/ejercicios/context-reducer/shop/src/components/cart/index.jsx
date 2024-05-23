import {
  List,
  Typography,
  Box,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { useCart } from "../../context/cartContext";
import DeleteIcon from "@mui/icons-material/Delete";
// Componente funcional Cart
 
const Cart = () => {
  // Utilizamos el contexto del carrito
  const { cart, dispatch } = useCart();

  const handleRemoveToCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", productId: product.id });
  };

  // Función para manejar la eliminación de un ítem del carrito
  return (
    <Box sx={{ width: 320, p: 2 }}>
      {/* Título del carrito */}
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Carrito de Compras
      </Typography>
      <List>
        {/* Mapeamos los ítems del carrito para mostrarlos */}
        {cart.map((product) => (
          <ListItem
            key={product.id}
            secondaryAction={
              <IconButton onClick={() => handleRemoveToCart(product)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={product.name}
              secondary={`Cantidad: ${product.quantity}`}
            />
          </ListItem>
        ))}

        {/* Mostramos el botón de "Proceder al Pago" si hay ítems en el carrito */}
      </List>
    </Box>
  );
};

export default Cart;
