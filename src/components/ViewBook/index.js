import React, { useState } from "react";
import { devolverLibro, solicitarLibro } from '../../services/librosServices';
import { getTokenUser, isLoggedUser } from "../../services/OauthServices";
import { useNavigate } from "react-router-dom";

const ViewBook = ({ book }) => {
    const [isOk, setIsOk] = useState("");
    const [isDisable, setIsDisable] = useState(false);
    const navigate = useNavigate();

    async function refundBook() {
        let response = await devolverLibro(book.id, getTokenUser());
        if (response.status) {
            setIsDisable(false);
            setIsOk(response.data);
        }
    };

    async function requestBook() {
        if (isLoggedUser()) {
            let response = await solicitarLibro(book.id, getTokenUser());
            if (response.status) {
                setIsDisable(true)
                setIsOk(response.data);
            }
            else{
                setIsOk(response.data);
            }
        }else{
           navigate('/login');
        }
    };

    return (
        <div className="container">
            <div className="container-header">
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
                    <span className="info-field">Dueño del Libro: </span>
                    Sarasa: {book.Libro.sinopsis}
                </div>
            </div>
            <div>
                <label>Sinopsis</label>
              
                <div className="box-description">
                    {book.Libro.sinopsis}
                </div>
            </div>
            {
                isDisable ?
                    <button className="action" onClick={refundBook}>Devolver Libro</button> :
                    <button className="action" onClick={requestBook}>Solicitar Libro</button>
            }
            {isOk !== '' && <div className="response">{isOk}</div>}
        </div>
    );
};

export default ViewBook;