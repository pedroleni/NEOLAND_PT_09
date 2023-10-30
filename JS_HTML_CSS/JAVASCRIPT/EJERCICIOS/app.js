//Iteración #3: Mix Fors
//Dado el siguiente javascript usa forof y forin para saber cuantas veces 
//ha sido cada sonido agregado por los usuarios a favorito.
// Para ello recorre la lista de usuarios y usa forin 
//para recoger el nombre de los sonidos que el usuario tenga como favoritos.
//Una vez accedas a ellos piensa en la mejor forma de hacer un conteo 
//de cada vez que ese sonido se repita como favorito en cada usuario.

//Este ejercicio es un poco complicado con los conocimientos actuales pero...
//a la vez un buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en javascript.

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

const allSound = [] //[{name: "NOMBRE DEL SONIDO", acc= numeroConLasVecesQueSeRepite}] 

let acc = 0

//! -----------> Hacemos un bucle al array y luego un for in al objeto que hay en la clave favoritesSounds
for ( let usuario of users){
    for (let clave  in usuario.favoritesSounds){
        /** vamos a comporobar que en el array que tiene los objetos de 
         * los elementos contados no este el nombre de la clave del sonido 
         * que estamos parados*/ 
        let accRepeticionesContado = 0
        // tenemos que recorrer el allSound para saber si este sonido ya se ha recorrido
        allSound.forEach((elementoContado, index)=>{
            clave === elementoContado.name && accRepeticionesContado++
        })
        // si acc es igual a 0, no esta contado este sonido
        
        if (accRepeticionesContado==0){
            acc= 0
            for (let usuarioContar of users){
                for (claveContar  in usuarioContar.favoritesSounds){
                    clave === claveContar && acc++
                }}
            allSound.push({
                name: clave,
                repeticiones: acc
            })
        }
    }
}

console.log(allSound)



//todo forma mas sencilla ---------------------------------------------------------------------------------


const usersTwo = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

// 1) Conseguir un array con todos los nombre repetidos de los sonidos

const allSoundFavortie = []

for ( let usuario of usersTwo){
    for ( let clave in usuario.favoritesSounds){
        allSoundFavortie.push(clave)
    }
}
console.log("🚀 ~ file: app.js:124 ~ allSoundFavortie:", allSoundFavortie)



// 2) hacer un array con los elementos contados 
// este array tiene objetos con la forma { name: 'waves', repeticiones: 3 }
const results = []


for (let sound of allSoundFavortie){
    // aqui recorremos el array original de nombre y me paro en un nombre
    acc = 0
    // recorro el array dde resultados para comprobar que el nombre donde estoy parado "sound" no este contado
    results.forEach((elementoContado, index)=>{
        // si esta contado porque lo encuentre incrementa el contador
        elementoContado.name === sound && acc++
    })
    // si el contador es igual a 0 eso quiere decir que en el array no esta contado el sound en el estamos parados

    if(acc== 0){

        // me pongo a contarlo con un segundo bucle recorriendo el array de nombres de nuevo y
        // compruebo cuando el primer nombre el cual esto parado "sound" coincide con el segundo nombre del bucle segundo "soundCound"
        for (let soundCound of  allSoundFavortie ){

            // si tenemos una coincidencia-- incrementamos el contador que previammente se ha reinicializado arriba al entrar al bucle principal
            soundCound == sound && acc++}

        results.push({name: sound, repeticiones: acc })

    }
}

console.log("🚀 ~ file: app.js:124 ~ results:", results)


