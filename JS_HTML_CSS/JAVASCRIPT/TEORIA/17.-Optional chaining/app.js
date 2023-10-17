const alumnos = [
  {
    name: "lucia",
    adrees: {
      number: 25,
    },
  },
  {
    name: "Mario",
  },
  {
    name: "Ruben",
    adrees: {
      number: 25,
    },
  },
  {
    name: "Carlos",
    adrees: {
      number: 25,
    },
  },
];
// el optional chaining es una interrrogacion
alumnos.map((alumno, index) => {
  alumno.adrees?.number === 25 && console.log("VIVE EN EL NUMERO 25");
});
