const jokeUrl = "https://api.chucknorris.io/jokes/random";
const userUrl = "https://reqres.in/api/users?page=2";

// Cloudinary
const cloudPreset = 'i42x0h7j';
const cloundUrl = 'https://api.cloudinary.com/v1_1/dyklc1qkc/upload';

const obtenerChiste = async () => {

    try {

        const response = await fetch(jokeUrl);

        if (!response.ok) throw alert("No se pudo realizar la peticion!");

        const { icon_url, id, value } = await response.json();

        return {
            icon_url,
            id,
            value
        };

    } catch (error) {
        throw error;
    }

};

const obtenerUsuarios = async () => {

    try {

        const response = await fetch(userUrl);
        const { data: users } = await response.json();

        return users;

    } catch (error) {
        throw error;
    }

}

const subirImagen = async (imagen) => {

    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', imagen);

    try {

        const resp = await fetch(cloundUrl, {
            method: 'POST',
            body: formData
        });

        if (resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }

    } catch (error) {
        throw error;
    }

}

export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
};
