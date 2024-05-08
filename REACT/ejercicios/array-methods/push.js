

// El método push() añade uno o más elementos al final de un array 
// añade uno o más elementos
// Devuelve la nueva longitud del array.


function pushCustom(array, ...elementos) {
    for (let index = 0; index < elementos.length; index++) {
        array[array.length] = elementos[index]
    }
    return array.length
}

const arr = [1,2,3]
const response = pushCustom(arr,1)

module.exports = { pushCustom };