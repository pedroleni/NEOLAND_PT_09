// src/components/ListaTareas.js
import React, { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import useTareas from "../hooks/useTareas";
import Tarea from "./Tarea"; // Componente individual para cada tarea

function ListaTareas() {
  const { tareas, eliminarTarea } = useTareas();

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <Link to="/agregar">Agregar Tarea</Link>
      <ul>
        {tareas.map((tarea) => (
          <Tarea key={tarea.id} tarea={tarea} eliminarTarea={eliminarTarea} />
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;
