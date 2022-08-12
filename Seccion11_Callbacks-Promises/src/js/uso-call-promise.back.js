
import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';

const heroeID1 = 'capi';
const heroeID2 = 'iron';

// buscarHeroe(heroeID1, (error, heroe1) => {
//     if (error) { return console.error(error); }
//     buscarHeroe(heroeID2, (error, heroe2) => {
//         if (error) { return console.error(error); }
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
//     });
// });

// buscarHeroe(heroeID1).then((heroe1) => {
//     buscarHeroe(heroeID2).then((heroe2) => {
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
//     });
// });

Promise.all([buscarHeroe(heroeID1), buscarHeroe(heroeID2)])
    .then(([heroe1, heroe2]) => {
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
    })
    .catch(error => alert(error))
    .finally(() => console.log("Se termino el promise.all"));

console.log("Fin del programa");
