// El método reverse() invierte el orden de los elementos de un array
// SIN aumentar el espacio del array ni creando uno nuevo. 
// El primer elemento pasa a ser el último 
// Y el último pasa a ser el primero.

function reverseArray(array) {
    let leftIndex = 0; // Índice inicial en el extremo izquierdo
    let rightIndex = array.length - 1; // Índice inicial en el extremo derecho

    while (leftIndex < rightIndex) {
        let temp = array[leftIndex];
        array[leftIndex] = array[rightIndex];
        array[rightIndex] = temp;

        leftIndex++;
        rightIndex--;
    }

    return array;
}

const numeros = [1, 2, 3, 4, 5];
console.log(reverseArray(numeros)); // Debería mostrar [5, 4, 3, 2, 1]


function reverseArray(array) {
    // Índices inicializados para el primer y último elemento del array
    for (let leftIndex = 0, rightIndex = array.length - 1; leftIndex < rightIndex; leftIndex++, rightIndex--) {
        // Intercambiar los elementos de los índices leftIndex y rightIndex
        let temp = array[leftIndex];
        array[leftIndex] = array[rightIndex];
        array[rightIndex] = temp;
        console.log("🚀 ~ reverseArray ~ array:", array)
    }

    return array; // Devolver el array original modificado
}

const numeros1 = [1, 2, 3, 4, 5];
console.log(reverseArray(numeros1)); // Debería mostrar [5, 4, 3, 2, 1]