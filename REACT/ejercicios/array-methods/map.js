// El método map() crea un nuevo array 
// Con los resultados de la llamada a la función indicada, aplicados a CADA UNO de sus elementos.


const {pushCustom} = require('./push')


function mapArray(array, callback) {
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
        pushCustom(resultado, callback(array[i], i, array));
    }
    return resultado;
}

const numeros = [1, 2, 3, 4];
const dobles = mapArray(numeros, x => x * 2);
console.log(dobles); // Debería mostrar [2, 4, 6, 8]
