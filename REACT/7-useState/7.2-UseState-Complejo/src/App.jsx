import React, { useState } from "react";
import "./App.css";

const App = () => {
  //! Inicializarlo con callback
  const [alumno, setAlumno] = useState(() => {
    return {
      name: "",
      age: 0,
      ciudad: "Madrid",
    };
  });
  //! Inicializarlo sin callback
  // const [alumno, setAlumno] = useState({
  //   name: "",
  //   age: 0,
  // });

  return (
    <>
      <p>Name: {alumno["name"]} </p>
      <p>Edad: {alumno.age} </p>
      <p>Ciudad: {alumno.ciudad} </p>
      <div className="input-container">
        <input
          type="text"
          name="name"
          id="name"
          onChange={(evento) =>
            setAlumno((value) => {
              return { ...value, name: evento.target.value };
            })
          }
        />

        <input
          type="number"
          name="age"
          id="age"
          onChange={(evento) =>
            setAlumno((valorAlumno) => {
              return {
                ...valorAlumno,
                age: evento.target.value,
              };
            })
          }
        />

        <input
          type="text"
          name="ciudad"
          id="ciudad"
          onChange={(evento) =>
            setAlumno((valorAlumno) => {
              return {
                ...valorAlumno,
                ciudad: evento.target.value,
              };
            })
          }
        />
      </div>
    </>
  );
};

export default App;
