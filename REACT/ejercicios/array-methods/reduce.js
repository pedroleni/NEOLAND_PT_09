// El método reduce() ejecuta una función reductora (funcion que combina elementos del array para reducirlos a un unico valor) sobre cada elemento de un array, 
 // devolviendo como resultado un único valor.
function reduceArray(array, reducer, initialValue) { // arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])
    let acumulador = initialValue;
    for (let i = 0; i < array.length; i++) {
        acumulador = reducer(acumulador, array[i], i, array); // Aplica la función reductora
    }
    return acumulador; // Devuelve el valor acumulado
}


const numeros = [1, 2, 3, 4];
const sumaTotal = reduceArray(numeros, (acc, curr) => acc + curr, 0);
console.log(sumaTotal); // Debería mostrar 10
