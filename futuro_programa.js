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
//-**********************************************************************
//--------------Otro-caso-de-clase-----------------------------------
class Persona {
    constructor() {
      this.Nombre = 'Matias';
    }
   /* set name(name) {
      this._name = name//.charAt(0).toUpperCase() + name.slice(1);
    }
    get name() {
      return this._name;
    }*/ //---------------averiguar-para-que-esto-------------------------------------
    chocarLosCinco() {
      console.log(this.Nombre + ' choca los cinco con ' + this.name + " y habla con " + this.name2);
    }
  }
  
  var personita = new Persona();
  personita.name = 'Franco';
  personita.name2 = 'Rocío';
  personita.chocarLosCinco();
  
//--------------------------------------Clases con IF dentro----------------------------------------
class Prestamo{
  constructor(){
  }
  Accion(){
      if(this.edad >= 18 && this.edad < 100){
          console.log ("Se le otorga el prestamo al propietario " + this.Nombre + " " + this.Apellido + " firmado por el Banco" );
      }else{
          console.log("No se otorga el beneficio debido a que la persona solicitante de un prestamo posee " + this.edad);
      }
  }
}



let acceso = new Prestamo();
acceso.edad = 99;
acceso.Nombre = "Matias";
acceso.Apellido = "Fernandez Miranda";
acceso.Accion();
