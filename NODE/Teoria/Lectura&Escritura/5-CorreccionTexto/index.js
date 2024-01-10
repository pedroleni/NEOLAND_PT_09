import fs from "fs";

fs.readFile("ejemplo.txt", "utf8", (error, data) => {
  error ? console.log(error) : correctData(data);
});

const correctData = (data) => {
  // \D este simbolo devuelve cualquier caracter que no sea un digito
  // \g indica que haga una busqueda global, es decir , que no se quede solo con la primera coincidencia
  /// paginas para aprender expresiones regulares
  // ------> https://regex101.com/
  // ------> https://regexr.com/

  // match devuelve un array con las coincidencias
  // join lo convierte a string

  let fixedData = data.match(/\D/g).join("");

  console.log(fixedData);
  writeFixedData(fixedData);
};

const writeFixedData = (data) => {
  fs.writeFile("correctData.txt", data, () => {
    console.log("Archivo escrito");
  });
};
