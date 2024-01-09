import { writeFile } from "fs";

// Datos que queremos escribir

const alumnos = [
  {
    name: "Rodri",
    age: "43",
    job: "dev",
  },
  {
    name: "Laura",
    age: "37",
    job: "libreria",
  },
  {
    name: "Antonio",
    age: "33",
    job: "dev",
  },
];

// Creamos función que convierta los datos

const converToCSV = (data) => {
  let csv = "";

  // Cogemos las claves de nuestro objeto y van a ser las cabeceras de nuestro csv

  const headers = Object.keys(alumnos[0]);

  // Escribiendo las cabeceras
  csv += headers.join(";") + "\n";

  data.forEach((row) => {
    headers.forEach((head, index) => {
      if (index > 0) {
        csv += ";";
      }

      csv += row[head];
    });

    csv += "\n";
  });

  return csv;
};

const CSVAlumns = converToCSV(alumnos);

writeFile("alumnos.csv", CSVAlumns, () => console.log("Archivo escrito"));
