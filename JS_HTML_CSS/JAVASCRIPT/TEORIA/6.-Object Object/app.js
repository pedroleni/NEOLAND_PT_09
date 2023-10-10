//! creacion de un object ----> pares de clave: valor

const alumno = {
  name: "Barbara",
  edad: 30,
  ciudad: "Madrid",
};

//! como meter mas datos o claves al object-position:

alumno.name = "Lucia"; /// -----> forma 1 con un punto y el nombre de la clave
alumno["name"] = "Barbara"; // -> forma 2 con un corchete y el nombre de la clave como un string

//console.log(alumno["name"]);
//console.log(alumno.edad);

delete alumno.ciudad;
//console.log("🚀 ~ file: app.js:18 ~ alumno:", alumno);

///! -----------------> repaso
class poligono {
  constructor(alto, ancho) {
    (this.alto = alto), (this.ancho = ancho);
  }
  // propiedad
  get area() {
    return this.calcularArea();
  }

  // metodo calcular area
  calcularArea() {
    return this.alto * this.ancho;
  }
}

const cuadrado = new poligono(5, 5);

//console.log(cuadrado.area); // -------> es una propiedad get que me da info del area como propiedad
//console.log(cuadrado.calcularArea()); // ---> es un metodo que calcula el valor de la propiedad area

const rectangulo = new poligono(5, 10);

//! ---------------------------------------------------------------------------------------
//? ---------------------------------METODOS Y PROPIEDADES---------------------------------
//! ---------------------------------------------------------------------------------------

// -----> 1 ) Obtener las claves: metodo que saca un array con las claves

const alumnoClaves = {
  name: "Barbara",
  edad: 30,
  ciudad: "Madrid",
};

const keyArray = Object.keys(alumnoClaves);
//console.log("🚀 ~ file: app.js:56 ~ keyArray:", keyArray);

// -----> 2) Obtener los valores de las claves: nos devuelve un array con los valores de las claves

const valueArray = Object.values(alumnoClaves);
//console.log("🚀 ~ file: app.js:61 ~ valueArray:", valueArray);

// TEORIA DE LOS ARRAYS PARALELOS

console.log(`Con la clave ${keyArray[0]} tiene el valor ${valueArray[0]}`);

// -------> 3) Metodo entries: nos devuelve um array de arrays
const entriesArray = Object.entries(alumnoClaves);
console.log("🚀 ~ file: app.js:70 ~ entriesArray:", entriesArray[0][1]);

// -------> 4) borrado de una clave

delete alumnoClaves.edad;
console.log("🚀 ~ file: app.js:74 ~ alumnoClaves:", alumnoClaves);

// -------> 5) cambiar o añadir nuevas claves
// -------> dos forma de poder modificar una clave (con el punto ---- con los corchetes)
alumnoClaves.name = "Lucia";
alumnoClaves["name"] = "Barbara";

alumnoClaves.CP = 28029;
alumnoClaves.CP = undefined;
console.log("🚀 ~ file: app.js:81 ~ alumnoClaves:", alumnoClaves);

console.log(alumnoClaves[keyArray[0]]);

// recordar que el objeto es una referencia de memoria por lo que aunque veais dos objectos que son identicos === os puede dar fal/*style*/`
/// -------> para solucionar lo anterior tenemos que convertirlo a string --> toString()

const objeto = {
  name: "Pedro",
  age: 30,
};

const JSONparseableString = JSON.stringify(objeto);
console.log("🚀 ~ file: app.js:96 ~ JSONparseableString:", JSONparseableString);

const parseObject = JSON.parse(JSONparseableString);
console.log("🚀 ~ file: app.js:99 ~ parseObject:", parseObject);
