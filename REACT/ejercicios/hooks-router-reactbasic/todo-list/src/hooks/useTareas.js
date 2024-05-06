// src/hooks/useTareas.js
import { useState, useEffect, useCallback } from 'react';

function useTareas() {

  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const cargarTareas = async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );
        const data = await response.json();
        setTareas(data);
      };
    // log para ver cuando se ejecuta esta llamada console.log("🚀 ~ useEffect ~ useEffect:");
    console.log("🚀 ~ useEffect ~ useEffect:");
    cargarTareas();
  }, []);

  const agregarTarea = async tarea => { // agegar tarea funciona pero al intereactuar con un API test no se veran reflejadas las tareas
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(tarea),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const nuevaTarea = await response.json();
    setTareas(prev => [...prev, { ...tarea, id: nuevaTarea.id }]);
  }; 

  const actualizarTarea = async (id, tarea) => { // actualizar tarea funciona pero al intereactuar con un API test no se veran reflejadas las tareas
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify(tarea),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const tareaActualizada = await response.json();
    setTareas(prev => prev.map(t => t.id === id ? { ...tarea, ...tareaActualizada } : t));
  };

  const eliminarTarea = async id => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE'
    });
    setTareas(prev => prev.filter(t => t.id !== id));
  };


  return { tareas, agregarTarea, actualizarTarea, eliminarTarea, setTareas };
}

export default useTareas;
