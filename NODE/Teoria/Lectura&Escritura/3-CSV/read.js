//!-------> Al usar el import debeis de añadir el type module en el package json
import csv from "csv-parser";
import { createReadStream } from "fs";

// Creamos un objeto vacío para introducir los datos

const dataStream = [];

// Llamamos a la función que nos va a leer el archivo

createReadStream("indicator.csv")
  .pipe(csv({ separator: ";" }))
  .on("data", (data) => dataStream.push(data))
  .on("end", () => console.log(dataStream));
