/**
 * 2C: Two of Clubs (Treboles)
 * 2D: Two of Diamonds
 * 2H: Two of Hearts
 * 2S: Two of Spades
 */

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

let puntosJugador = 0;
let puntosComputadora = 0;

// Referencias HTML
const btnPedir = document.querySelector("#btnPedir");
const btnDetener = document.querySelector("#btnDetener");
const btnNuevo = document.querySelector("#btnNuevo");
const puntosHtml = document.querySelectorAll("small");
const divCartasJugador = document.querySelector("#jugador-cartas");
const divCartasComputadora = document.querySelector("#computadora-cartas");

/**
 * ESTA FUNCION CREA UNA NUEVA BARAJA
 */
const createDeck = () => {

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(`${i}${tipo}`)
        }
    }

    for (let tipo of tipos) {
        for (let especial of especiales) {
            deck.push(`${especial}${tipo}`)
        }
    }

    deck = _.shuffle(deck);

}

createDeck();

/**
 * ESTA FUNCION PERMITE TOMAR UNA NUEVA CARA
 */
const perdirCarta = () => {

    if (deck.length === 0) {
        throw "No hay mas cartas!";
    }

    const carta = deck.pop();
    return carta;

}

// perdirCarta();
/**
 * FUNCION PARA PEDIR CARTA
 * @param {String} carta 
 */
const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === "A") ? 11 : 10
        : Number(valor);

}

/**
 * FUNCION PARA PUNTOS DE COMPUTADORA
 * @param {Number} puntosMinimos 
 */
const turnoComputadora = (puntosMinimos) => {

    do {

        const carta = perdirCarta();

        puntosComputadora += valorCarta(carta);
        puntosHtml[1].innerText = puntosComputadora;

        const imgCartas = document.createElement("img");
        imgCartas.src = `assets/cartas/${carta}.png`;
        imgCartas.classList = "carta";
        divCartasComputadora.append(imgCartas);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora == puntosJugador) {
            alert("Nadie Gana!")
        } else if (puntosMinimos > 21) {
            alert("Computadora Gana!");
        } else if (puntosComputadora > 21) {
            alert("Jugador Gana!")
        } else {
            alert("Computadora Gana!");
        }
    }, 100);

}

/**
 * Eventos
 */
btnPedir.addEventListener('click', () => {

    const carta = perdirCarta();

    puntosJugador += valorCarta(carta);
    puntosHtml[0].innerText = puntosJugador;

    const imgCartas = document.createElement("img");
    imgCartas.src = `assets/cartas/${carta}.png`;
    imgCartas.classList = "carta";
    divCartasJugador.append(imgCartas);

    if (puntosJugador > 21) {
        console.warn("Perdiste!");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    } else if (puntosJugador == 21) {
        console.warn("Ganaste!");
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }

});

btnDetener.addEventListener('click', () => {

    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);

});

btnNuevo.addEventListener('click', () => {

    deck = [];
    createDeck();
    puntosJugador = 0;
    puntosComputadora = 0;
    puntosHtml[0].innerText = 0;
    puntosHtml[1].innerText = 0;
    divCartasJugador.innerHTML = '';
    divCartasComputadora.innerHTML = '';
    btnPedir.disabled = false;
    btnDetener.disabled = false;

});