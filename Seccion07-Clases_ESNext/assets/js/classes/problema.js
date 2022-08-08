function Persona(nombre, edad) {

    // console.log("Se ejecuto esta linea");

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function () {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }

}

const maria = new Persona("Maria", 18);
const melissa = new Persona("Melissa", 35);
// console.log(maria);
maria.imprimir();
maria.imprimir();