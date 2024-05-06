// src/components/Tarea.js
import React from "react";
import { Link } from "react-router-dom";

const Tarea = ({ tarea, eliminarTarea }) => {
  return (
    <li>
      {tarea.title}
      <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
      <Link to={`/editar/${tarea.id}`}>Editar</Link>
    </li>
  );
};

export default Tarea;
