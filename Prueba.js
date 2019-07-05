class Persona{
    constructor(nombre, Apellido){
        this.nombre = nombre;
        this.Apellido = Apellido
    }
    Saludo(){
        console.log("hola, mi nombre es " + this.nombre + " y mi apellido es " + this.Apellido);
    }
}

let persona = new Persona("Matias", "Fernandez");
persona.nombre2 = ("Matias", "Puricceli");

persona.Saludo() + persona.nombre2()



