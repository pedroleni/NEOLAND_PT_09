// 1. Ejemplo con Callbacks
// Para utilizar callbacks en un escenario real con llamadas a API, 
// podemos utilizar la librería xmlhttprequest para realizar llamadas HTTP. 
// Sin embargo, hoy en día es más común usar la función fetch, que retorna promesas. 
// Pero, para mantenernos en la línea de los callbacks, usaré un módulo que soporta callbacks, como request, 
// aunque está en desuso en favor de opciones basadas en promesas.
// Nota: Para este ejercicio, considera que tienes instalado request o cualquier otra biblioteca que soporte callbacks. 
// Vamos a hacer de cuenta que aún es una opción válida:

const request = require('request');
const fetch = require('node-fetch');


const fetchPokemonCB = (name, callback) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    request(url, { json: true }, (error, res, body) => {
        if (error) {
            callback(error, null);
        } else if (res.statusCode !== 200) {
            callback(new Error('Failed to fetch data'), null);
        } else {
            callback(null, body);
        }
    });
};

// Uso de la función
fetchPokemonCB('pikachu', (error, data) => {
    if (error) {
        console.error(error);
    } else {
        console.log(data);  // Datos del Pokémon Pikachu
    }
});


// 2. Ejemplo con Promesas
// Usando la función fetch, que es nativa en JavaScript para entornos de navegador y Node.js (con módulos como node-fetch), 
// podemos hacer la llamada a la API de forma más moderna y preferida:

const fetchPokemonPromise = (name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
};

// Uso de la función
fetchPokemonPromise('bulbasaur')
    .then(data => console.log(data))  // Datos del Pokémon Bulbasaur
    .catch(error => console.error('Error:', error));




// 3. Ejemplo con Async/Await
// Este es el método más moderno y claro para manejar asincronía utilizando promesas bajo la capa de async/await, 
// que simplifica el manejo del flujo asincrónico:

const fetchPokemonAsync = async (name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
};

// Uso de la función
fetchPokemonAsync('pikachu');

