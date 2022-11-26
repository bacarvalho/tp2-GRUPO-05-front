import React, { useEffect, useState } from "react";
import { devolverLibro, solicitarLibro } from '../../services/librosServices';
import { getTokenUser, isLoggedUser, getUserName } from "../../services/OauthServices";
import { useNavigate } from "react-router-dom";
import { isDocument } from "@testing-library/user-event/dist/utils";

const ViewBook = ({ book }) => {

    const [isOk, setIsOk] = useState("");
    const [isDisable, setIsDisable] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setIsDisable(book.Prestamo === null);
    }, [book]);

    async function refundBook() {
        let response = await devolverLibro(book.id, getTokenUser());
        if (response.status) {
            setIsDisable(!isDisable);
            setIsOk(response.data);
        }
    };
    async function requestBook() {
        if (isLoggedUser()) {
            let response = await solicitarLibro(book.id, getTokenUser());
            console.log('RESPONSE', response);
            if (response.statusError === 403) {
                navigate('/login');
            } else {
                if (response.status) {
                    setIsDisable(!isDisable);
                    setIsOk(response.data);
                }
                else {
                    setIsOk(response.data);
                }
            }
        } else {
            navigate('/login');
        }
    };

    function sarasa() {
        navigate(-1);
    }

    return (
        <div className="container">
            <div className="container-header">
                <div>
                    <button onClick={sarasa}> Volver atras</button>
                </div>
                <div className="container-picture">
                    <img id="image1" src={`/imagenes_portadas/${book.Libro.isbn}.jpg`} />
                </div>
                <div className="container-info">
                    <span className="info-field">Titulo: {book.Libro.titulo}</span>
                    <span className="info-field">Autor: {book.Libro.Autor.nombre}</span>
                    <span className="info-field">Genero: {book.Libro.Genero.nombre}</span>
                    <span className="info-field">Editorial: {book.Libro.Editorial.nombre}</span>
                    <span className="info-field">Año: {book.Libro.anio}</span>
                    <span className="info-field">ISBN: {book.Libro.isbn}</span>
                    <span className="info-field">Dueño del Libro: {book.Usuario.nombre} </span>
                </div>
            </div>
            <div>
                <div className="box-description">
                    {book.Libro.sinopsis}
                </div>
            </div>
            {isDisable ? <button className="action" onClick={requestBook}>Solicitar Libro</button> : <button className="action" onClick={refundBook}>Devolver Libro</button>}
            {isOk !== '' && <div className="response">{isOk}</div>}
        </div>
    );
};

export default ViewBook;