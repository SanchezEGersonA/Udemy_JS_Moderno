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

class Heroe extends Persona {

    clan = "Sin Clan";
    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase);
        this.clan = "Los Avengers";
    }

    quienSoy() {
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }

}

const spiderman = new Heroe("Peter Parker", "SpiderMan", "Soy tu amigable vecino Spiderman");
const ironman = new Heroe("Tony Star", "IronMan", "Yo soy IronMan");

console.log(spiderman);
spiderman.quienSoy();
