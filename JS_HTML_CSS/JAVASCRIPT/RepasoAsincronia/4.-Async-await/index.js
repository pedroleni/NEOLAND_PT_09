// define una función asincrona y devuelve un objeto
// permite ejecutar una función sin congelar la compilación
// Su finalidad es simplificar el comportamiento asincrono de las promesas

const asyncFunction = () => {
  // regresar una promesa

  return new Promise((resolve, reject) => {
    // Ponemos una condición para saber si se cumple o no
    true
      ? setTimeout(() => {
          resolve("ASyync!!!! Resuelta");
        }, 2000)
      : reject(new Error("Error!!!!"));
  });
};

//console.log(asyncFunction()); // Promise { <pending> } --> no se ha cumplido ni rechazado

const otherAsync = async () => {
  // Ponemos await para esperar a que se cumpla o rechace la promesa
  const something = await asyncFunction(); // Esto es una promesa --> hay que esperar a que se cumpla

  // Espera a que something este disponible
  console.log(something);

  // no se muestra hasta que no este el something (await)
  console.log("Holaaaaaa");
};

console.log("Antes de la función");
otherAsync(); // Tarda 2 segundos en ejecutarse
console.log("Despues de la función");

//! -------------- TRY / CATCH --------------

const API = "https://api.escuelajs.co/api/v1";

const fetchData = async (urlApi) => {
  const response = await fetch(urlApi);

  // Cuando tenga la respuesta la transformas a json
  const data = await response.json();

  // Cuando tengas la data la devuelves
  return data;
};

// Vamos a hacer uso de try / catch --> intentalo y si hay error lo capturas

const anotherFunction = async (urlApi) => {
  try {
    // Todos los productos --> getAll
    const allProducts = await fetchData(`${urlApi}/products`);

    console.log("PRODUCTS", allProducts[0]);

    // Peticion a un producto --> getById
    // Esperamos a que products este disponible
    const product = await fetchData(`${urlApi}/products/${allProducts[54].id}`);

    console.log("PRODUCT", product);

    // Peticion a categoria
    const category = await fetchData(
      `${urlApi}/categories/${product.category.id}`
    );

    console.log("Categoria", category);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction(API);
