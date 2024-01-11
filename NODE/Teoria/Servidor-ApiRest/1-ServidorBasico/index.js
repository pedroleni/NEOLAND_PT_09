// todo : un servidor escucha las solicitudes enviadas a un puerto especifico

//!--- Lo primero será requerir el protoco http con node

// http es un protocolo que se usa para transmitir información en internet
// Es usado por navegadores para comunicarse con los servidores web
// Arquitectura petición - respuesta ----- req / res

const http = require("http");

//! ----- Creamos el servidor web con el protocolo

const app = http.createServer((req, res) => {
  // Configuramos la respuesta del servidor

  res.statusCode = 200; // todo --- Si es un 200 esta correcta

  res.setHeader("Content-type", "text/html");

  res.end("<h1>Buenos dias</h1>");
});

//! ---- Asignamos el puerto en el que va a escuchar el servidor

app.listen(8081, () => {
  console.log("Conectado al puerto 8081 en  http://localhost:8081");
});
