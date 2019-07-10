/*
    Ahora una de las funciones que más piden en todos lados: ordenar arrays.
    Hay muchas formas de hacerlo, pero la más básica es la de burbujeo.
    Pero antes, veremos un ejemplo más básico para devolver un array.
    Esto nos sirve para tener una idea que el return no siempre devuelve un valor numérico,
    sino que en este caso estamos devolviendo un array.
*/

// ************** No le de importancia a esta porción de código ************** //
// Vamos a generar un array de forma aleatoria.
let elArray = [];
let cantidadArray = Math.floor(Math.random() * Math.floor(15)) + 3;

for(let i = 0; i <= cantidadArray; i++){
    elArray[i] = Math.floor(Math.random() * Math.floor(10));
}

// *************************************************************************** //

// Para este ejercicio, vamos a plicar más las cosas, y pedirle que devuelva un array con todos números
// que sean iguales o mayores al promedio del array.
// Esto es: 
/*
Si el array pasado como parámetro es:
[ 6, 1, 7, 0, 6, 3, 7, 2, 0, 5, 5, 2, 7, 7, 1, 5 ]

Y el promedio es: 4

El resultado o lo que se devuelva en el return tendía que ser [5, 6, 7]
*/

// Recuerde que el array que estamos usando para las pruebas es: "elArray", no use otro.

// Implementar funcion


// Hacer el llamado a la funcion



// -------------------------------------------------------------------------------------------------------- //

// Ahora intentemos ordenar el array, la funcion debería devolver el array ordenado de menor a mayor.
function ordernarMenorMayor(arrayAOrdenar) {
    // Implemente la funcion aqui.
}

console.log(ordernarMenorMayor(elArray));


// -------------------------------------------------------------------------------------------------------- //

// Y si la queremos de mayor a menor?
function ordernarMayorMenor(arrayAOrdenar) {
    // Implemente la funcion aqui.

    // Devuelva el valor
    return ;
}

console.log(ordernarMayorMenor(elArray));

// -------------------------------------------------------------------------------------------------------- //
// La funcion que acabamos de usar, al igual que con la funcion sort() de JS, ambas modifican el array que le pasamos como parámetro
// y muchas veces no queremos esto, o muchas otras no podemos por como esta hecho el código.
// Intente hacer el mismo ejercicio, pero no modifique el array enviado como parámetro, o sea: elArray.




// -------------------------------------------------------------------------------------------------------- //
// Como último ejercicio, algo que le va a servir para más tarde, intente implementar una funcion de comparación entre dos items.

function compare(primerItem, segundoItem){
}

// Esta funcion devuelve:
/*
    Un valor menor a 0 si    : primerItem viene antes de segundoItem.
    Un valor más grande que 0: segundoItem viene antes de primerItem.
    Cero si                  : primerItem y segundoItem son iguales
*/

// -------------------------------------------------------------------------------------------------------- //
// Eso es todo por ahora, recuerde que solo estamos trabajando con números en estos momentos, luego se le puede agregar strings y más adelante objetos.
// Pero esta es lo básico e indispensable para hacer el salto a otras cosas.