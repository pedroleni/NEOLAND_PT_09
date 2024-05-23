import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    console.log("🚀 ~ handleChange ~ event:", event);
    setFromData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    console.log("🚀 ~ handleSubmit ~ event:", event);
    event.preventDefault();

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Nombre:</label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='password'>Contraseña:</label>
        <input
          type='password'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type='submit'>Enviar</button>
    </form>
  );
}

export default App;
