
//video de youtube ----https://www.youtube.com/watch?v=VuMqkdX8Ze0

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

let pila = new Array();

pila = [2,5,6,1];
//pos   0 1 2 3 
pila.sort()

e = 1

/*for(i = 0; i < pila.length; i++){
    if (pila[i] >= pila[e] ){
        pila[i] = pila[e];
        pila[e] = pila[i];
    }
    e++;
}
*/


console.log(pila);

