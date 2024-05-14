import { useState, createContext, useContext, useReducer } from "react";

// DEFINICION:

// Utilizando useContext y useReducer cread una gestión de tareas, donde se pueda añadir una tarea a un estado global utilizando el context.

// La modificación tendrá que ser mediante una función reductora

// Deberéis definir un componente donde se consuma la informacion del context y se use la funcion reductora.

// PASOS:

// Paso 1: Se crea un contexto para las tareas DONE
// Paso 2: se define una funcion para reducer que añade nuevas tareas. DONE
// Paso 3: Crear el provider que contendrá el estado y la función reductora.
// Paso 4: AddTodo permite añadir nuevas tareas utilizando el método dispatch del contexto.
// Paso 5: TodoList muestra las tareas.

const TodoContext = createContext();

function todoReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    default:
      return state;
  }
}

// eslint-disable-next-line react/prop-types
const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

const AddTodo = () => {
  const { dispatch } = useContext(TodoContext);
  const addToTask = () => dispatch({ type: "add", payload: "New Task" });

  return <button onClick={() => addToTask()}>Add Todo</button>;
};

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};

function App() {
  return (
    <TodoProvider>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
}

export default App;
