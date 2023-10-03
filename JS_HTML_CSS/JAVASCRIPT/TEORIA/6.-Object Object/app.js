//! creacion de un object ----> pares de clave: valor

const alumno = {
  name: "Barbara",
  edad: 30,
  ciudad: "Madrid",
};

//! como meter mas datos o claves al object-position:

alumno.name = "Lucia"; /// -----> forma 1 con un punto y el nombre de la clave
alumno["name"] = "Barbara"; // -> forma 2 con un corchete y el nombre de la clave como un string

console.log(alumno["name"]);
console.log(alumno.edad);

delete alumno.ciudad;
console.log("🚀 ~ file: app.js:18 ~ alumno:", alumno);

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

console.log(cuadrado.area); // -------> es una propiedad get que me da info del area como propiedad
console.log(cuadrado.calcularArea()); // ---> es un metodo que calcula el valor de la propiedad area

const rectangulo = new poligono(5, 10);
