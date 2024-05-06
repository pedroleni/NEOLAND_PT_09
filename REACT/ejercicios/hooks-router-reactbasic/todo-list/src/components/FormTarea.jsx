// src/components/FormTarea.js
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useTareas from "../hooks/useTareas";

function FormTarea() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tareas, agregarTarea, actualizarTarea } = useTareas();
  const [titulo, setTitulo] = useState("");

  useEffect(() => {
    if (id) {
      const tarea = tareas.find((t) => t.id.toString() === id);
      if (tarea) {
        setTitulo(tarea.title);
      }
    }
  }, [id, tareas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const tareaData = { title: titulo, userId: 1, completed: false };
    if (id) {
      actualizarTarea(id, tareaData);
    } else {
      agregarTarea(tareaData);
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{id ? "Editar Tarea" : "Agregar Tarea"}</h1>
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />
      <button type="submit">{id ? "Actualizar" : "Agregar"}</button>
    </form>
  );
}

export default FormTarea;
