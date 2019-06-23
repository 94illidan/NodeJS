class Prestamo{
    constructor(){
    }
    Accion(){
        if(this.edad < 18){
            console.log ("Se le otorga el prestamo al propietario " + this.Nombre + this.Apellido + " firmado por el Banco" );
        }else{
            console.log("No se otorga el beneficio debido a que la persona solicitante de un prestamo posee " + this.edad);
        }
    }
}



let acceso = new Prestamo();
acceso.edad = 18;
acceso.Nombre = "Matias";
acceso.Apellido = "Fernandez Miranda";