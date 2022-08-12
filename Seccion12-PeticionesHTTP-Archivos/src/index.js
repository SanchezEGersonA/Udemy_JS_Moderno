
// const jokeUrl = "https://api.chucknorris.io/jokes/random";

// import { init } from "./js/chistes-page";
// import { init } from "./js/usuarios-page";
// import { obtenerUsuarios } from "./js/http-provider";

// import { obtenerChiste } from "./js/http-provider";

// import * as CRUD from './js/crud-provider';

import { init } from "./js/archivos-page";

// fetch(jokeUrl).then(res => {
//     res.json().then(({ id, value }) => {
//         console.log(id);
//         console.log(value);
//     });
// });

// fetch(jokeUrl)
//     .then(res => res.json())
//     .then(({ id, value }) => {
//         console.log(id);
//         console.log(value);
//     });

// obtenerChiste().then(console.log)

// init();
// obtenerUsuarios().then(console.log)

// init();

// CRUD.getUsuario(1).then(console.log);
// CRUD.crearUsuario({ name: "Gerson", job: "Programador" }).then(console.log);
// CRUD.actualizarUsuario(1, { name: "Gerson", job: "Programador" }).then(console.log);
// CRUD.borrarUsuario(1).then(console.log);

init();
