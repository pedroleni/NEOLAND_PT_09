import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import useFetch from "./hooks/useFetch";
import "./App.css";

function App() {
  const { data, error, loading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/ditto"
  );
  if (loading) return <p>Esta cargando</p>;
  if (error) return <p>Esta roto</p>;
  console.log("🚀 ~ App ~ data:", data);
  return (
    <>
      <div>
        <p>{JSON.stringify(data)}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
