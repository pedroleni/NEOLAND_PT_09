const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const template = () => `<input type="text" id="inputBusqueda">
<div id="busqueda"></div>`;

const listeners = () => {
  const input = document.getElementById("inputBusqueda");
  input.addEventListener("input", (event) => {
    // borrar el contenedor
    document.getElementById("busqueda").innerHTML = "";
    const filterData = streamers.filter((item, index) =>
      item.name.includes(event.target.value)
    );

    filterData.forEach((itemJugador, index) => {
      const { name, age, gameMorePlayed } = itemJugador;
      const articleJugador = `
        <article>
        <h2>${name}</h2>
        <p>Edad: ${age} </p>
        <p>Juego: ${gameMorePlayed} </p>
        </article>`;

      document.getElementById("busqueda").innerHTML += articleJugador;
    });
  });
};

const PrintInput = () => {
  document.getElementById("app").innerHTML = template();
  listeners();
};

PrintInput();
