const getData = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((res) => {
      if (!res.ok) {
        throw new Error(" error en la llamada asyncrona");
      } else {
        return res.json();
      }
    })
    .then((res) => res.results)
    .catch((error) => console.log(error));
};

const mappeoDeDatos = (rawData) => {
  const dataMapeada = rawData.map((item) => ({
    id: item.id,
    name: item.name,
  }));
  printData(dataMapeada);
};

const printData = (data) => {
  // data son los arra
  const containerPintar = document.getElementById("app");

  data.map((item) => {
    const article = `
        <article>
            <p>${item.id}</p>
            <p>${item.name}</p>
        </article>
        `;

    containerPintar.innerHTML += article;
  });
};
const init = () => {
  getData().then((res) => mappeoDeDatos(res));
};

init();
