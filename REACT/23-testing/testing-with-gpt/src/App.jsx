import React, { useState } from "react";

// Componente principal del tablero de tareas
const App = () => {
  // Estado para almacenar las tareas
  const [tasks, setTasks] = useState([]);
  // Estado para el valor del input de nueva tarea
  const [taskInput, setTaskInput] = useState("");

  // Función para añadir una nueva tarea
  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  // Función para eliminar una tarea por su índice
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Task Board</h1>
      <input
        type='text'
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
