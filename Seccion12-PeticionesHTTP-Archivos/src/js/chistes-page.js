import { obtenerChiste } from "./http-provider";

const body = document.body;
let btnOtro;
let olList;

const crearChisteHtml = () => {

    const html = `
        <h1 class="mt-5 px-10">Chistes</h1>
        <hr />
        <button class="btn btn-primary">Otro Chiste</button>
        <ol class="mt-2 px-10 list-group"></ol>
    `;

    const divChiste = document.createElement('div');
    divChiste.classList.add('container')
    divChiste.innerHTML = html;
    body.append(divChiste);

}

const eventos = () => {

    olList = document.querySelector('ol');
    btnOtro = document.querySelector('button');

    btnOtro.addEventListener('click', async () => {
        btnOtro.disabled = true;
        dibujarChiste(await obtenerChiste());
        btnOtro.disabled = false;
    });

}

/**
 * Datos del chiste
 * @param {Object} chiste - {id, value}
 */
const dibujarChiste = (chiste) => {

    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${chiste.id}</b>: ${chiste.value}`;
    olItem.classList.add('list-group-item');
    olList.append(olItem);

}

export const init = () => {
    crearChisteHtml();
    eventos();
}
