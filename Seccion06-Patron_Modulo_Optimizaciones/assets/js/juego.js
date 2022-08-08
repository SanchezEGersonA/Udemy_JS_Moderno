const miModulo = (() => {

    'use strict'

    /**
     * 2C: Two of Clubs (Treboles)
     * 2D: Two of Diamonds
     * 2H: Two of Hearts
     * 2S: Two of Spades
     */

    let deck = [];
    const tipos = ["C", "D", "H", "S"];
    const especiales = ["A", "J", "Q", "K"];

    // let puntosJugador = 0;
    // let puntosComputadora = 0;
    let puntosJugadores = [];

    // Referencias HTML
    const btnPedir = document.querySelector("#btnPedir");
    const btnDetener = document.querySelector("#btnDetener");
    const btnNuevo = document.querySelector("#btnNuevo");
    const divCartasJugadores = document.querySelectorAll(".divCartas");
    const puntosHtml = document.querySelectorAll("small");

    // Esta funcion inicia el juego y barajea la baraja
    const inicializarJuego = (numeroJugadores = 2) => {

        deck = createDeck();

        puntosJugadores = [];
        for (let i = 0; i < numeroJugadores; i++) {
            puntosJugadores.push(0);
        }

        puntosHtml.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = "");

        btnPedir.disabled = false;
        btnDetener.disabled = false;

    }

    // ESTA FUNCION CREA UNA NUEVA BARAJA
    const createDeck = () => {

        deck = [];

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

        return _.shuffle(deck);

    }

    /**
     * ESTA FUNCION PERMITE TOMAR UNA NUEVA CARA
     */
    const perdirCarta = () => {

        if (deck.length === 0) {
            throw "No hay mas cartas!";
        }

        return deck.pop();

    }

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
     * Funcion para acumular puntos
     * @param {String} carta
     * @param {Number} turno - 0: Primer jugador y ultimo: Computadora
     */
    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] += valorCarta(carta);
        puntosHtml[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    /**
     * Funcion para crear las cartas y se muestren en pantalla
     * @param {String} carta 
     * @param {Number} turno - 0: Primer jugador y ultimo: Computadora
     */
    const crearCarta = (carta, turno) => {
        const imgCartas = document.createElement("img");
        imgCartas.src = `assets/cartas/${carta}.png`;
        imgCartas.classList = "carta";
        divCartasJugadores[turno].append(imgCartas);
    }

    // Funcion para determinar el ganador
    const determinarGanador = () => {

        const [puntosMinimos, puntosComputadora] = puntosJugadores;

        setTimeout(() => {
            if (puntosComputadora == puntosMinimos) {
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
     * FUNCION PARA PUNTOS DE COMPUTADORA
     * @param {Number} puntosMinimos 
     */
    const turnoComputadora = (puntosMinimos) => {

        let puntosComputadora = 0;
        do {

            const carta = perdirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);

            crearCarta(carta, puntosJugadores.length - 1);

        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        determinarGanador();

    }

    /**
     * Eventos
     */
    btnPedir.addEventListener('click', () => {

        const carta = perdirCarta();
        let puntosJugador = acumularPuntos(carta, 0);

        crearCarta(carta, 0);

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
        turnoComputadora(puntosJugadores[0]);

    });

    // btnNuevo.addEventListener('click', () => {
    //     inicializarJuego();
    // });

    return {
        nuevoJuego: inicializarJuego
    };

})();
