const saludar = (nombre) => {
  return nombre ?? "desconocido";
};
// dar un valor alternativo ante la posibilidad de que la variable sea nula o undefined
const saludo = saludar();
console.log("🚀 ~ file: app.js:6 ~ saludo:", saludo);

// ? ----> ternario
// ?? ----> nullish
// ?.  ----> optional Chaining
