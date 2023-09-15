import axios from 'axios';


export function getAtornilladoresRequest(setAtornilladores) {

    const apiUrl = `https://torquealto.com/h2actualizado/h2/public/api/herramientas/atornilladores`;

    // Realizar la solicitud GET a la API
    axios.get(apiUrl)
        .then(response => {
            // Actualizar el estado con los datos del personaje
            setAtornilladores(response.data);
        })
        .catch(error => {
            console.error('Error al obtener los datos del personaje', error);
        });

}

