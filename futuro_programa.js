/*---Video donde se muestra como hacer una pila--https://www.youtube.com/watch?v=FTGK47ndKJM
    -----Video donde me muestra como hacer una clase---https://www.youtube.com/watch?v=puxoJpOl9TA
*/

class Personas{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    Saludar(){
        console.log(" hola, mi nombre es " + this.nombre + " y tengo " + this.edad);
    }
}

let persona = new Personas ("Matias", 25);

//console.log (gente.Saludar());

class ubicacion{
    constructor(pais,provincia){
        this.pais = pais;
        this.provincia = provincia;
    }
    Saludo2(){
        console.log(" Vengo de " + this.pais + " en la localidad de " + this.provincia)
    }
}

let locacion = new ubicacion ("Argentina", "Capital Federal");



persona.Saludar() + locacion.Saludo2();


/*
---Tarea---
y como tarea si te animas, que la persona tena un metodo:
chocarLosCinco y que reciba como parametro otra persona e imprima: <nombre de una de las peronas> chocha los conco con <nombre de la persona que recibe por parametro>

*/