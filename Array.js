
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

//6 3 1 4 2 5


pila = [3, 6, 1, 4, 2, 5]; //Numerico
//pila = ["aa", "aab", "aad", "aac", "aat", "aat"]; //alfanumerico

//      0  1  2  3  4  5


i = 0;//primera posicion
e = 1;//segunda posicion
d = 0;//lugar donde guardas la primera posicion
j = 0;//cantidad de veces que verfica la pila


console.log (pila);

while (j < pila.length){
    for (i = 0, e = 1; i < pila.length; i++, e++){
        if (pila[i] >= pila[e]){
            d = pila[e];
            pila[e] = pila[i];
            pila[i] = d;
        }
        //console.log ("Variable_I", i, "Variable_E", e);
        //console.log (pila);
    }
    j++
    //console.log ("variable_J" , j);
}

console.log (pila);



















// pila.sort()
// console.log (i);
// console.log (pila);

// console.log(pila[pila.length -5]);