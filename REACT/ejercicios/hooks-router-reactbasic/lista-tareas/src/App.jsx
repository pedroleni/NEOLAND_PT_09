import React, { useState } from "react";

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = () => {
    if (nuevaTarea) {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea("");
    }
  };

  const eliminarTarea = (index) => {
    setTareas(tareas.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <button onClick={agregarTarea}>Agregar Tarea</button>
      <ListaTareas tareas={tareas} eliminarTarea={eliminarTarea} />
    </div>
  );
}

function ListaTareas({ tareas, eliminarTarea }) {
  return (
    <ul>
      {tareas.map((tarea, index) => (
        <Tarea
          key={index}
          tarea={tarea}
          eliminar={() => eliminarTarea(index)}
        />
      ))}
    </ul>
  );
}

function Tarea({ tarea, eliminar }) {
  return (
    <li>
      {tarea} <button onClick={eliminar}>Eliminar</button>
    </li>
  );
}

export default App;
