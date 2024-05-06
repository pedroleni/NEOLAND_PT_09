import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListaTareas from "./components/ListaTareas";
import FormTarea from "./components/FormTarea";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<ListaTareas />} />
        <Route path="/agregar" element={<FormTarea />} />
        <Route path="/editar/:id" element={<FormTarea />} />
      </Routes>
    </Router>
  );
}

export default App;
