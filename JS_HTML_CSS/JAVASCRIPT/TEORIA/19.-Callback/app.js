const generarNombre = (nombre, apellido, funcionCallBack) => {
  const fullName = `${nombre} ${apellido}`;
  const fullNameAntiguo = nombre + " " + apellido;
  funcionCallBack(fullName);
};

generarNombre("Pedro", "Lerida Nieto", (totalName) => {
  console.log(totalName);
});

//------------------------> esta es la mejor forma--------------------
const print = (totalName) => {
  console.log(totalName);
};

generarNombre("Lucia", "Lerida Nieto", print);

//------------------------------------
forEach(() => {});
map(() => {});
filter(() => {});
setInterval(() => {}, 1000);
some(() => {});
