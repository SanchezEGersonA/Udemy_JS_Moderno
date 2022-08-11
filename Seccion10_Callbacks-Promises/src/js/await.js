import { buscarHeroe, buscarHeroeAsync } from "./promesas";

const heroesIDS = ["capi", "iron", "spider"];
const heroesPromesas = heroesIDS.map(id => buscarHeroe(id));

export const obtenerHeroesArr = async () => {

    return await Promise.all(heroesIDS.map(buscarHeroe));

    // const heroesArr = [];
    // for (const id of heroesIDS) {
    //     heroesArr.push(buscarHeroe(id));
    // }

    // return await Promise.all(heroesArr);

}

export const obtenerHeroeAwait = async (id) => {
    try {
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    } catch (error) {
        return {
            nombre: "sin nombre",
            poder: "sin poder"
        };
        // throw error;
    }
}

export const heroesCiclo = async () => {
    console.time('HeroesCiclo');
    // const heroes = await Promise.all(heroesPromesas);
    // console.log(heroes);
    for await (const heroe of heroesPromesas) {
        console.log(heroe);
    }
    console.timeEnd('HeroesCiclo');
}

export const heroeIfAwait = async (id) => {
    if ((await buscarHeroeAsync(id)).nombre === 'Ironman') {
        console.log("Es el mejor de todos!");
    } else {
        console.log("Nahhhh");
    }
};
