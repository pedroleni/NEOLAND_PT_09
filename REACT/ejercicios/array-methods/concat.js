// El metodo concat se usa para unir dos o mas arrays.
// Este metodo no cambia los arrays existentes
// Devuelve un nuevo array


function concatCustom(...arrays) {
    const newArray = []

    // [
    //     [1,2,3],
    //     ['hola', 'adios'],
    //     ['buenos', 'dias']
    // ]

    for (let i = 0; i < arrays.length; i++) {
        const currentArray = arrays[i];
        for (let j = 0; j < currentArray.length; j++) {
            newArray.push(currentArray[j])
        } 
    }
     return newArray
}


const arr1 = [1,2,3,4]
const arr2 = [5,6,7]

const combine = concatCustom(arr1, arr2)
console.log("🚀 ~ combine:", combine)
