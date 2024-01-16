//?--------------------------------------------------------------------------------------------
//!------------------------------------ CREAMOS EL SERVIDOR ------------------------------------
//?--------------------------------------------------------------------------------------------

const express = require("express");
const PORT = 8081;

const app = express();

//?--------------------------------------------------------------------------------------------
//!-------------------------------------------ROUTING-------------------------------------------
//?--------------------------------------------------------------------------------------------

const router = express.Router();

const alumns = ["Federico", "Amparo", "Juliana", "Adrian"]; //--> simulamos los datos

//!-----Creamos los diferentes endpoint (RUTAS) ----->> PARAMS <-----------------
//? Params se utiliza con dos puntos :
//?Si ponemos un param son obligatorios

router.get("/buscar/:name", (req, res, next) => {
  // Hacemos destructuring de los parametros de la solicitud
  const { name } = req.params;
  console.log(name);

  // creamos contador para sumarlo en uno cuando el nombre que nos llega por params coincide con alguno de nuestro array
  let acc = 0;

  // recorremos nuestro array de alumnos
  alumns.forEach((alumno) => {
    // Si el nombre recogido de los parametros coincide con alguno del array se suma uno al contador
    alumno.toLowerCase() === name.toLowerCase() && acc++;
  });

  // Si el contador es mayor que 0 es que se ha encontrado al alumno y la respuesta es correcta

  // Enviamos la respuesta con el estado : status y el mensaje que es el json
  return acc > 0
    ? res.status(200).json("Se ha encontrado el alumno ✅")
    : res.status(404).json("Alumno no encontrado ❌");
});

//!-----Creamos los diferentes endpoint (RUTAS) ----->> QUERYS <-----------------
//? --- Las querys no son obligatorias
//? empiezan con ? seguido del nombre (nombre query) luego un = seguido de su valor
//? Para poner varias querys se utiliza &

router.get("/queryBuscar", (req, res, next) => {
  // Hacemos destructuring del name que proviene de las querys
  const { name, apellido } = req.query;

  console.log("apellido por query", apellido);
  console.log("name por query", name);

  if (name) {
    let acc = 0;

    alumns.forEach((alumn) => {
      alumn.toLowerCase() === name.toLowerCase() && acc++;
    });

    // Controlamos la respuesta
    return acc > 0
      ? res.status(200).json("Se ha encontrado el alumno ✅")
      : res.status(404).json("alumno no existe");
  } else {
    // Sino hay nombre, es que no hemos metido ningun nombre en la query
    return res.status(404).json("no ha incluido el nombre en las querys");
  }
});

//?--------------------------------------------------------------------------------------------
//!------------------------   CONFIGURAMOS USO DE ROUTING    --------------------------
//?--------------------------------------------------------------------------------------------

app.use("/api/v1", router);
//?--------------------------------------------------------------------------------------------
//!------------------------   ESCUCHAMOS EL SERVIDOR EN EL PUERTO    --------------------------
//?--------------------------------------------------------------------------------------------

app.listen(PORT, () => {
  console.log(`Server ejecutado en http://localhost:${PORT}`);
});
