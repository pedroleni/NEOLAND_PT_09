
// Validar la longitud del array y si no tiene devuelve undefined
// El método pop() elimina el último elemento de un array 
// Y lo devuelve. 
// Este método cambia la longitud del array.


function popArray(array) {
    if (array.length === 0) return undefined;
    const lastElement = array[array.length - 1];
    array.length = array.length - 1;
    return lastElement;
}

const numeros = [1,2];
console.log(popArray(numeros));  // Muestra 2
console.log(numeros);  // Muestra [1]
