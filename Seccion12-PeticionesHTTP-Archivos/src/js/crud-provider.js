
const crudUrl = "https://reqres.in/api/users";

const getUsuario = async (id) => {

    const resp = await fetch(`${crudUrl}/${id}`);
    const { data } = await resp.json();

    console.log(data);

}

const crearUsuario = async (user) => {

    const resp = await fetch(crudUrl, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await resp.json();

}

const actualizarUsuario = async (id, user) => {

    const resp = await fetch(`${crudUrl}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await resp.json();

}

const borrarUsuario = async (id) => {

    const resp = await fetch(`${crudUrl}/${id}`, {
        method: 'DELETE',
    });

    return (resp.ok) ? 'Borrado' : 'No se pudo borrar';

}

export {
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario
}
