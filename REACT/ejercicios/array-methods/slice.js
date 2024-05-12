// El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). 
// El array original no se modificará.
function sliceArray(array, start, end) { // arr.slice([inicio [, fin]])
    let slicedArray = [];

    // Ajustar end si no se proporciona o es mayor que la longitud del array
    end = end || array.length;
    if (end > array.length) {
        end = array.length;
    }

    // Copiar elementos del rango especificado al nuevo array
    for (let i = start; i < end; i++) {
        slicedArray.push(array[i]);
    }

    return slicedArray; // Devuelve el array recortado
}

const numeros = [1, 2, 3, 4, 5];
const recortados = sliceArray(numeros, 2);
console.log(recortados); // Debería mostrar [2, 3]
