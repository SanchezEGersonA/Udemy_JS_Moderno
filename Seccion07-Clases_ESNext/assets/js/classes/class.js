class Persona {

    static _conteo = 0;
    static get getConteo() {
        return Persona._conteo + " instancias"
    }

    static mensaje() {
        console.log("Hola a todos soy metodo estatico");
    }

    nombre = "";
    codigo = "";
    frase = "";
    comida = "";

    constructor(nombre, codigo, frase) {
        // console.log("Hola!");
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo += 1;
    }

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }

}

const spiderman = new Persona("Peter Parker", "SpiderMan", "Soy tu amigable vecino Spiderman");
const ironman = new Persona("Tony Star", "IronMan", "Yo soy IronMan");

// console.log(ironman);

// spiderman.quienSoy();
spiderman.miFrase();
spiderman.setComidaFavorita = "El pie de cereja de la tia May";
console.log(spiderman);
console.log(spiderman.getComidaFavorita);
// spiderman.comida = "Duende Verde";
// ironman.quienSoy();
// ironman.miFrase();

// Persona._conteo = 2;
console.log("Conteo estatico", Persona._conteo);
console.log(Persona.getConteo);
Persona.mensaje();

// Persona.propiedadExterna = "Hola mundo";
// console.log(Persona.propiedadExterna);
// console.log(Persona);
