import "./H2.css";

const crearElemente = (texto) => {
  const h2 = document.createElement("h2");
  h2.textContent = texto;
  h2.classList.add("H2");
  return h2;
};

// listeners no tenemos porque es un simple h2

export const PrintH2 = (texto) => {
  document.getElementById("app").append(crearElemente(texto));
};
