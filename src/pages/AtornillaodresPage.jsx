import React, { useEffect, useState } from 'react';
import { getAtornilladoresRequest } from '../api/atornilladoresApi';

function AtornilladoresPages() {
    const [Atornilladores, setAtornilladores] = useState(null);

    useEffect(() => {
        // Invoca la función para obtener los datos de la API
        getAtornilladoresRequest(setAtornilladores);

    }, []);

    console.log(Atornilladores)

    if (!Atornilladores) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {Atornilladores.map((atornillador, index) => (
                        <tr key={index}>
                            <td><a href={atornillador.url_image}><img src={atornillador.url_image} width="75" alt={atornillador.nombre} /></a></td>
                            <td><a href="">{atornillador.nombre}</a></td>
                            <td><a href="">{atornillador.ventajas}</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AtornilladoresPages;

