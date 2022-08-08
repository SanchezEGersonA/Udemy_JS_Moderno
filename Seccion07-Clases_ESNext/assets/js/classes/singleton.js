class Singleton {

    static _instancia;
    nombre = '';

    constructor(nombre = '') {
        if (!!Singleton._instancia) {
            return Singleton._instancia;
        }
        Singleton._instancia = this;
        this.nombre = nombre;
        // return this;
    }

}

const instacia1 = new Singleton('Ironman');
const instacia2 = new Singleton('Spiderman');
const instacia3 = new Singleton('Blackpanther');

console.log(`Nombre en la instancia 1 es ${instacia1.nombre}`);
console.log(`Nombre en la instancia 2 es ${instacia2.nombre}`);
console.log(`Nombre en la instancia 3 es ${instacia3.nombre}`);
