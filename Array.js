
//video de youtube ----https://www.youtube.com/watch?v=VuMqkdX8Ze0-- basico

//continuacion de arriba -- https://www.youtube.com/watch?v=2DFDhOD670s

//para borrar varias posiciones -----var3.splice(posiciones, psicones)
// se utiliza POP para buscar el ultimo registro "IMPORTANTE"
//ORDENAR se utiliza sort "pila.sort()"

/*
let var1 = new Array(); //creo el array

var1 = [1, 2, 3, 4, 5, 6, 7]; //cargo la variable del array

var1.push ("canoa", "arbol"); // agrego datos adicionales al array

var1[11] = "trebor";//agrego en la posicion 11 el nuevo valor dejando 2 posiciones vacias entre el valor 7 y trebor

for(i = 0; i < var1.length; i++){
    console.log(var1, i);         //consulto cantidad de datos dentro del array y luego llamo tanto al array como a mi contador
}

*/


// pila.sort()
// console.log (i);
// console.log (pila);

// console.log(pila[pila.length -5]);

//***********************Array*MatiP**********************************/
// let x = 0;
// let j = 0;
// let pila = [];
// let cantidadArray = Math.floor(Math.random() * Math.floor(15)) + 3;

// for(let i = 0; i <= cantidadArray; i++){
//     pila[i] = Math.floor(Math.random() * Math.floor(10)) ;
// }

// console.log(`Pila inicial: ${ pila }`);

// while (j < pila.length){
//     for (i = 0, e = 1; i < pila.length -1, e < pila.length; i++, e++){
//         x++;

//         console.log(`Ciclo ${ x }. Pila: ${ pila }. ${pila[i]} >= ${pila[e]}`);

//         if (pila[i] >= pila[e]){
//             d = pila[e];
//             pila[e] = pila[i];
//             pila[i] = d;
//         }

//     }
//     j++
//     //console.log ("variable_J" , j);
// }
// console.log(pila);

//***********************Array*MatiP**********************************/


//*********************cargar*array*de*forma*aleatoria****************/

pila = []
let cantidadArray = Math.floor(Math.random() * Math.floor(15)) + 3;

for(let i = 0; i <= cantidadArray; i++){
    pila[i] = Math.floor(Math.random() * Math.floor(10)) ;
}

console.log (pila);

//*********************cargar*array*de*forma*aleatoria****************/


pila = []

let cantidadArray = Math.floor(Math.random() * Math.floor(15)) + 3;

for(let i = 0; i <= cantidadArray; i++){
    pila[i] = Math.floor(Math.random() * Math.floor(10)) ;
}

console.log (pila);

//      0  1  2  3  4  5


i = 0;//primera posicion
e = 1;//segunda posicion
d = 0;//lugar donde guardas la primera posicion
j = 0;//cantidad de veces que verfica la pila


console.log (pila);

while (j < pila.length){
    for (i = 0, e = 1; i < pila.length -1, e < pila.length; i++, e++){
        if (pila[i] >= pila[e]){
            d = pila[e];
            pila[e] = pila[i];
            pila[i] = d;
        }
        //console.log ("Ciclo_I", i, "Ciclo_E", e);
        //console.log (pila);
    }
    j++
    //console.log ("variable_J" , j);
}

console.log (pila);

//****************************************/

// elArray = Math.floor(Math.random() * Math.floor(15))

// for (let i = 0; i <= elArray.length - 2 ; i++) {

//     console.log();

//         for (let j = i + 1; j <= elArray.length - 1; j++) {

//             console.log(`[${elArray}]: elArray[${i}]: ${elArray[i]} < elArray[${j}]: ${elArray[j]} (${elArray[i] < elArray[j]})`);

//                 if(elArray[i] < elArray[j]){

//                     auxiliar = elArray[j];
//                     elArray[j] = elArray[i];
//                     elArray[i] = auxiliar;

//                 }
//             }
// }
// console.log();
// console.log(elArray);