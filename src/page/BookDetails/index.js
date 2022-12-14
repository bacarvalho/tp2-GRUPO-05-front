import React from 'react';
import ViewBook from '../../components/ViewBook';
import { useLocation } from "react-router-dom";
import { getDetailsBook } from '../../services/librosServices';
import { useEffect, useState } from 'react';
import { getTokenUser } from '../../services/OauthServices';

function View() {

    const location = useLocation();
    const DataV2 = {
        Libro: {
            isbn: '',
            titulo: '',
            anio: '',
            imagen_portada: '',
            sinopsis: "in quis justo maecenas rhoncus aliquam lacus morbi",
            Autor: { nombre: '' },
            Genero: {
                nombre: ""
            },
            Editorial: {
                nombre: ""
            }
        },
        Prestamo: null,
        Usuario: {
            nombre: ""
        }
    }

    const [data, setMydata] = useState(DataV2);

    useEffect(() => {
        const getData = async () => {
            let response = await getDetailsBook(location.state.data.id, getTokenUser());
            if (response.status) {
                setMydata(response.data);
            }
        }
        getData();
    }, []); 

    return (
        <>
            <ViewBook book={data} />
        </>
    )
}

export default View;
