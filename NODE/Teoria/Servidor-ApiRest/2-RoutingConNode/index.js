//! -- Requerimos protocolo http

const http = require("http");

//! -- Creamos el servidor web

const app = http.createServer((req, res) => {
  // req ------> req.url --- es el endpoint de la solicitud

  console.log(req.url);
  const url = req.url;

  const method = req.method;

  // Depende de la url que recibamos vamos a ejecutar una cosa u otra

  switch (url) {
    case "/saludo":
      res.end("<h1>Saludos, buenos dias </h1>");
      break;
    case "/despedida":
      res.end("<h1>Ciao bambino</h1>");
      break;

    default:
      break;
  }

  if (method === "GET" && url === "/alumnos") getAlumns(res);
});

const getAlumns = (res) => {
  const alumnos = [
    {
      name: "Jorge",
      age: 20,
    },
    {
      name: "Dani",
      age: 20,
    },
    {
      name: "Elena",
      age: 20,
    },
  ];

  const dataString = JSON.stringify(alumnos);

  res.setHeader("Content-type", "application/json");

  res.end(dataString);
};

app.listen(8081, () => {
  console.log("Conectado al puerto 8081 en el localhost:8081");
});
