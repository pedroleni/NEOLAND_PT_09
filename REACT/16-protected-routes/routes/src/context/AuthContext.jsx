import { createContext, useMemo } from "react"; // Importamos createContext para crear un contexto de autenticación y useMemo para memorizar valores.
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para la navegación programática en nuestra aplicación.
import { useLocalStorage } from "../hooks/useLocalStorage"; // Importamos un hook personalizado useLocalStorage para manejar el estado en el almacenamiento local.

// Creamos el contexto de autenticación.
export const AuthContext = createContext();

// Definimos el proveedor de autenticación que envolverá los componentes que necesiten acceso al contexto.
export const AuthProvider = ({ children }) => {
  // useLocalStorage hook personalizado para gestionar el estado del usuario en el almacenamiento local.
  const [user, setUser] = useLocalStorage("user", null);

  // useNavigate hook de React Router para la navegación programática.
  const navigate = useNavigate();

  // Función de login que actualiza el estado del usuario y navega al perfil del usuario.
  const login = async (data) => {
    setUser(data); // Establecemos el usuario en el estado.
    navigate("/dashboard/profile", { replace: true }); // Navegamos al perfil del usuario, reemplazando la ruta actual.
  };

  // Función de logout que limpia el estado del usuario y navega a la página principal.
  const logout = () => {
    setUser(null); // Establecemos el usuario a null en el estado.
    navigate("/", { replace: true }); // Navegamos a la página principal, reemplazando la ruta actual.
  };

  // useMemo memoriza el valor del contexto para evitar recalcularlo en cada renderizado.
  const value = useMemo(
    () => ({
      user, // Estado del usuario.
      login, // Función de login.
      logout, // Función de logout.
    }),
    [user] // Solo recalcula el valor si el estado del usuario cambia.
  );

  // Retornamos el proveedor del contexto con el valor calculado, envolviendo los componentes hijos.
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
