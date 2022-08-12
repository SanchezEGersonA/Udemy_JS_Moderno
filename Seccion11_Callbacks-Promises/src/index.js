
// import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas';
// import { buscarHeroe, buscarHeroeAsync } from './js/promesas';

import { heroeIfAwait, heroesCiclo, obtenerHeroeAwait, obtenerHeroesArr } from "./js/await";

// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

// Promise.race([promesaLenta, promesaMedia, promesaRapida])
//     .then(console.log)
//     .catch(console.warn);

// buscarHeroe('capi')
//     .then((heroe) => console.log(heroe));

// buscarHeroeAsync('iron')
//     .then((heroe) => console.log(heroe))
//     .catch(error => console.log(error));

// obtenerHeroesArr().then(console.table);

// obtenerHeroeAwait('capi1')
//     .then((heroe) => console.log(heroe))
//     .catch(console.warn);

heroesCiclo();
heroeIfAwait('iron');
