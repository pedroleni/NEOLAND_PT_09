//! ----------------------- GET -----------------------
// Fetch --> inicia el proceso de obtener un recurso de la web

// Para ver lo que devuelve la promesa del Fetch hay que hacer un then(()) y transformar la data a json

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
  .then((data) => data.json()) // Transformamos los datos a json para poder trabajar con ellos
  .then((products) => console.log(products))
  .then(() => console.log("Hola"))
  .catch((error) => console.log(error)); // Catch obligatorio

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
  .catch((error) => console.log(error)) // Catch obligatorio
  .finally(() => console.log("Finalizado"));

//! ----------------------- POST -----------------------

// guarda o crea un recurso (datos)

const postData = (urlApi, data) => {
  const response = fetch(urlApi, {
    method: "POST",
    mode: "cors", // cors (permisos),
    credentials: "same-origin", // valores por defecto
    headers: {
      "Content-Type": "application/json", // Si enviamos archivos hay que poner otro tipo --> multipart
    },
    body: JSON.stringify(data), // hay que transformar la data a string
  });

  return response;
};

// creamos los datos que vamos a enviar (objeto)

const data = {
  title: "New productss 222",
  price: 10,
  description: "Una pequeña descripción muy pequeña",
  categoryId: 2,
  images: ["https://i.imgur.com/QkIa5tT.jpeg"],
};

postData(`${API}/products`, data) // para ver esta respuesta hay que hacer un .then(())
  .then((res) => res.json()) // siempre transformamos los datos recibidos para poder trabajar con ellos
  .then((data) => console.log(data));
