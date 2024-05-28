import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import { WithAuthentication } from "./hocs/WithAuthentication";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

// Componente Profile envuelto por el HOC
const AuthProfile = WithAuthentication(Profile);

export default function App() {
  return (
    <div className='App'>
      {/* 🚨 Cambia este valor entre true/false para probar la ruta protegida 🚨 */}
      <AuthContext.Provider value={true}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />

            {/* Usamos una ruta normal, pero con el componente protegido */}
            <Route
              path='profile'
              element={<AuthProfile name={"Sergio"} lastName={"Perez"} />}
            />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}
