const fs = require("fs");

const { XMLParser } = require("fast-xml-parser");

const parseInstance = new XMLParser();

fs.readFile("rootXML.xml", "utf8", (error, data) => {
  let dataParse;

  error ? console.log("error", error) : (dataParse = parseInstance.parse(data));

  const { alumnosRootElement } = dataParse;

  const { alunos } = alumnosRootElement;
  console.log(alunos);
});
