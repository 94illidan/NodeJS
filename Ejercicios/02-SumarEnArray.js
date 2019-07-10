/*
    Ya que vimos como sumar dos números, hagamos esto más complejo.
    Intentemos sumar los números de un array.
    Para eso, vamos a generar un array de forma aleatoria, y con ello vamos a descubrir como hacer esta suma.
    Recuerde que no se muestra el array que vamos a tener que sumar, eso le corresponde a Ud.
    Trate de implementar su propio código para esto usando un ciclo FOR, y no usar la ayuda del lenguaje.
*/

// ************** No le de importancia a esta porción de código ************** //
// Vamos a generar un array de forma aleatoria.
let elArray = [];
let cantidadArray = Math.floor(Math.random() * Math.floor(15)) + 3;

for(let i = 0; i <= cantidadArray; i++){
    elArray[i] = Math.floor(Math.random() * Math.floor(10)) ;
}

// *************************************************************************** //


// Implemente la siguiente función que devuelva la suma de ambos números enviados como parámetro.
function sumar(arrayParaSumar){

    // Implemente aqui el código de la función.
    // Recuerde que para hacer referencia a una posicion del array deberá usar: arrayParaSumar[<numero de la posicion>]. Ej: arrayParaSumar[3]


    // Devuelva el resultado
    return ;

}

// Llamemos a la funcion pasándole como parámetro el array que acabamos de crear:
console.log(sumar(elArray));


// -------------------------------------------------------------------------------------------------------- //
// Como uno no se conforma con la suma, y siempre quiere más, como puede reescribir a contnuación el promedio de los valores del array.
// Para el promedio, queremos la suma de todos los valores del array dividido la cantidad de items del array.

// function promedio(arrayParaSumar){

//     // Implemente aqui el código de la función.

//     // Devuelva el resultado
//     return ;
// }

// Se anima a crear la llamada a la funcion promedio?
