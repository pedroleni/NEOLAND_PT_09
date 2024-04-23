const obtenerDatosPokemon = async() =>{
  const url = 'https://pokeapi.co/api/v2/pokemon/ditto'; // URL de la API para Ditto

  try {
    // Haciendo la llamada HTTP a la API
    const respuesta = await fetch(url);

    // fetch llama a pokeapi, con un parametro ditto
    // pokkeapi consulta en su api la informacion recibida de nuestra peticion
    // filtra por el parametro para devolver la inforamacion de ditto
    // almacenamos la respuesta de pokeapi en una constante llamada respuesta


    // Esperando a que la respuesta sea convertida a JSON
    const datos = await respuesta.json();

    // Mostrar los datos en la consola
    console.log(datos);
  } catch (error) {
    // Manejar errores que puedan ocurrir durante la llamada a la API o en el procesamiento de la respuesta
    console.error('Error al obtener datos de Pokémon:', error);
  }
}

// Llamar a la función
obtenerDatosPokemon();
