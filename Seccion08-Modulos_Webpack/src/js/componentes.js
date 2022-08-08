
import '../css/componentes.css';
// import WebpackLogo from '../assets/img/webpack-logo.png';

export const saludar = (nombre) => {

    console.log("Creando etiqueta H1");
    const h1 = document.createElement("h1");
    h1.innerText = `Hola, ${nombre}!`;
    document.body.append(h1);

    // const img = document.createElement("img");
    // img.src = WebpackLogo;
    // document.body.append(img);

}


