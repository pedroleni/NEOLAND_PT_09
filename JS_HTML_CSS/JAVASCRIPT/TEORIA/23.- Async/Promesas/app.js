const promesa = new Promise((resolve, reject) => {
  let combustible = "gasoli";

  if (combustible === "gasolina") {
    resolve("la nave puede despegar");
  } else {
    reject("intenta meterle gasoliina que no puede despegar");
  }
});

promesa
  .then((resolucionPromesa) => console.log(resolucionPromesa))
  .catch((error) => console.log(error));

/// -------------------> PROMESAS ----> FETCH ---> REQUEST <----- RESPONSE ( POR PARTE DE la API QUE ESTA CONECTADA A LA BDO)

/// ---------------> ASYNC AWAIT

const getData = async () => {
  try {
    const rawDataBDO = await fetch("URL.com"); /// aqui meto la url del endPOINT ---> ENPOINT = DIFERENTE PETICIONES
    if (!rawDataBDO.ok) {
      throw new Error("Error en la llamada asincrona");
    } else {
      const dataJSON = await rawDataBDO.json();
    }
  } catch (error) {
    console.log(error);
  }
};

/// ---------------> PROMESAS .THEN

fetch("URL.com")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Error en la llamada asincrona");
    } else {
      return res.json();
    }
  })
  .catch((error) => console.log(error));
