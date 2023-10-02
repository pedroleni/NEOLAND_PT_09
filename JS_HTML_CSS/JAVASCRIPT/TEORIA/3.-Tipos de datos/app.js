// string, number, boolean, undefined, null, object(arrays, object)
//?-----------------------------------------------------------------------------
//todop ------------> object object -----> {clave: valor}-----------------------
//?-----------------------------------------------------------------------------
const obj = {
  city: "Madrid",
  CP: 28029,
  adress: {
    zona: "norte",
    calle: "pedrera",
  },
};

console.log(typeof obj); // devuelve un string con el tipo ----> object

/// formas de acceder a la clave de los objetos
console.log(obj.city);
console.log(obj["CP"]);

// borrado de claves

delete obj.adress;
console.log("🚀 ~ file: app.js:22 ~ obj:", obj);

//! ----------------------------REFERENCIAS DE MEMORIA EN LOS OBJETOS Y SU PROBLEMATICA---------------

const nombre = "Ruben";
const alumno = "Ruben";

if (alumno == nombre) console.log("son iguales");

const arrayNumber = [1, 1, 1, { name: "Pedro" }, [2, 3, 5]]; // se guarda con una referencia de memoria unitaria
const arrayNumberTwo = [1, 1, 1, { name: "Pedro" }, [2, 3, 5]];

const newArray = [];
/// lo que comparo son sus referencias de memoria no lo que sacamos en pantalla
if (arrayNumber.toString() == arrayNumberTwo.toString()) {
  console.log("los arrays son iguales");
} else {
  console.log("no son iguales");
}

const alumnoNew = {
  name: "luis",
  age: 25,
  direccion: [13740, "ciudad real"],
};

const alumnoTwo = alumnoNew;

alumnoTwo.name = "lucia";

console.log("🚀 ~ file: app.js:97 ~ alumnoNew:", alumnoNew);
console.log("🚀 ~ file: app.js:100 ~ alumnoTwo:", alumnoTwo);

/// la inmutabilidad de la informacion ----> hacer una copia de los datos para no modificar el original

const copyAlumno = { ...alumnoNew }; // copia con una referencia dee memoria nueva ---> SPREAD OPERATOR -ES6 (...)

copyAlumno.name = "Rodolfo";
console.log("🚀 ~ file: app.js:110 ~ copyAlumno:", copyAlumno);
console.log("🚀 ~ file: app.js:97 ~ alumnoNew:", alumnoNew);

//?-----------------------------------------------------------------------------
//todop ------------> object array -----> [posicion1, posicion2, ...]-----------------------
//?-----------------------------------------------------------------------------

const arrayExample = [
  {
    ability: {
      name: "overgrow",
      url: "https://pokeapi.co/api/v2/ability/65/",
    },
    is_hidden: false,
    slot: 1,
  },
  {
    ability: {
      name: "chlorophyll",
      url: "https://pokeapi.co/api/v2/ability/34/",
    },
    is_hidden: true,
    slot: 3,
  },
];

console.log(arrayExample.length); /// .....> propiedad no lleva parentesis -----> caja alargada
console.log(arrayExample.toString()); // .....> metodo---> si lleva parentesis--> caja cuadrada
///----------> recordar lo de las referencias de memoria que es lo que teneis arriba con los object-position:

//?-----------------------------------------------------------------------------
//todop ------------> STRING ----> CONJUNTO DE CARACTERES-----------------------
//?-----------------------------------------------------------------------------

const saludo = "hola que tal ?";

// los espacion importante cuenta como un webkit-hyphenate-character:
console.log(saludo[0]);

//?-----------------------------------------------------------------------------
//todop ------------>------- NUMBER --------------------------------------------
//?-----------------------------------------------------------------------------

const PI = 3.14346454786; // float
const age = 30; // int

//?-----------------------------------------------------------------------------
//todop ------------>------- NULL --------------------------------------------
//?-----------------------------------------------------------------------------

let nada = null; /// -----> false ----> 0
// caseSentive -----> NULL EN MAYUSCULA ES OTRA COSA DIFERENTE A null
console.log("--null", typeof nada); /// ------> typeof nos da object

console.log(!nada);
//?-----------------------------------------------------------------------------
//todop ------------>------- UNDEFINED------------------------------------------
//?-----------------------------------------------------------------------------

let exampleUndefined;
console.log(typeof exampleUndefined);

console.log(!exampleUndefined); /// da false pero lo convierte a true con el operador NOT (!)

console.log(!!exampleUndefined); // -----> aqui no da el valor real en booleano porque negamos lo negado

//?-----------------------------------------------------------------------------
//todop ------------>------- BOOLEAN------------------------------------------
//?-----------------------------------------------------------------------------

let ganar = true; // ----> 1
let perder = false; // --> 0
