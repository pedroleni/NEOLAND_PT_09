const fs = require("fs");

const { XMLBuilder } = require("fast-xml-parser");

// todo ----> DOCU ---> https://github.com/NaturalIntelligence/fast-xml-parser/blob/97713ad3ec709f4612118120ce3fde310eed60ec/docs/v4/3.XMLBuilder.md
// Creamos los datos que vamos a escribir en el formato XML
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

// Creamos el objeto con las opciones que xml builder necesita
let options = {
  ignoreAttributes: false,
  format: true,
  arrayNodeName: "alumno",
};

//todo ----> INCORRECTO
//! Creamos nueva intancia de Builder

const builder = new XMLBuilder(options);

console.log("Builder", builder);

///let output = builder.build(alumnos);

// No esta creado correctamente ----> FALTA UN ELEMENTO RAIZ
//console.log("output", output);

//--------------------------------------------------------------------------------------

const alumnnosROOT = {
  alumnosRootElement: {
    alunos: [
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
    ],
  },
};

let opciones = {
  ignoreAttributes: false,
  format: true,
};

const builderRoot = new XMLBuilder(opciones);

let output = builderRoot.build(alumnnosROOT);

console.log("OUTPUTROOT", output);

fs.writeFile("rootXML.xml", output, () =>
  console.log("Archivos escritos correctamente ✅")
);
