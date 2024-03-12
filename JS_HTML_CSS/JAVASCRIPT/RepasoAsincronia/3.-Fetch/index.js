//! ----------------------- GET -----------------------
// Fetch --> inicia el proceso de obtener un recurso de la web

// --> devuelve una promesa que se resuelve una vez que la respuesta este disponible
// ---> se rechaza cuando ocurre un problema de red

const API = "https://api.escuelajs.co/api/v1";

const fecthData = (urlApi) => {
  return fetch(urlApi);
};

// --> Utilizamos el controlador then para saber cuando esta disponible la respuesta  --> verifica
// se pueden anidar cuantos then queramos
// Capturar el error con catch

fecthData(`${API}/products`)
  .then((res) => res.json()) // Transformamos los datos a json para poder trabajar con ellos
  .then((products) => console.log(products))
  .then(() => console.log("Hola"))
  .catch((error) => console.log(error));

//!! Si ponemos return hay que poner llaves

fecthData(`${API}/products`)
  .then((res) => res.json())
  .then((products) => {
    return fecthData(`${API}/products/${products[1].id}`);
  })
  .then((res) => res.json())
  .then((product) => fecthData(`${API}/categories/${product.category.id}`))
  .then((res) => res.json())
  .then((category) => console.log(category.name))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizado"));

//! ----------------------- POST -----------------------
