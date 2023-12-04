const getData = async () => {
  try {
    const rawData = await fetch("https://rickandmortyapi.com/api/character");

    if (!rawData.ok) {
      throw new Error(" error en la llamada asyncrona");
    } else {
      const jsonData = await rawData.json();
      return mappeoDeDatos(jsonData.results);
    }
  } catch (error) {
    console.log(error);
  }
};

const mappeoDeDatos = (rawData) => {
  const dataMapeada = rawData.map((item) => ({ id: item.id, name: item.name }));
  return dataMapeada;
};

const printData = (data) => {
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

const init = async () => {
  printData(await getData());
};

init();
