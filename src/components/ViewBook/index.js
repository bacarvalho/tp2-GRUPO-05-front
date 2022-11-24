import React, { useState } from "react";
import book from './book.json';
import {devolverLibro, solicitarLibro} from '../../services/librosServices';

//usar getDetailsBook();

function getImage(imagenPhoto) {
    const image = 'images/' + imagenPhoto;
    return image.toString();
}


const ViewBook = () => {

    const [isOk, setIsOk] = useState("");
    const [isDisable, setIsDisable] = useState(true);


    async function refundBook(){
        let response = await devolverLibro(book.id, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoyLCJub21icmUiOiJsZWxlIn0sImlhdCI6MTY2OTI3MDg0NywiZXhwIjoxNjY5Mjc0NDQ3fQ.G3gpqLNG4YJ6d0fMvGK9gRjYtlg65NSyte09rYlc5WI");   
        console.log(response);
        if(response.status) {
            setIsDisable(false);
            setIsOk(response.data);
        }
    };
    
    async function requestBook(){
        let response = await solicitarLibro(book.id, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoyLCJub21icmUiOiJsZWxlIn0sImlhdCI6MTY2OTI3MDg0NywiZXhwIjoxNjY5Mjc0NDQ3fQ.G3gpqLNG4YJ6d0fMvGK9gRjYtlg65NSyte09rYlc5WI");   
        console.log(response);
        if(response.status) {
            setIsDisable(true)
            setIsOk(response.data);
        }
    };
    

    return (
        <div className="container">
            <div className="container-header">
                <div className="container-picture">
                    <img id="image1" src='imagenes_portadas/1.jpg' />
                </div>
                <div className="container-info">
                    <span className="info-field">Titulo: {book.Libro.titulo}</span>
                    <span className="info-field">Autor: {book.Libro.Autor.nombre}</span>
                    <span className="info-field">Genero: {book.Libro.Genero.nombre}</span>
                    <span className="info-field">Editorial: {book.Libro.Editorial.nombre}</span>
                    <span className="info-field">Año: {book.Libro.anio}</span>
                    <span className="info-field">ISBN: {book.Libro.isbn}</span>
                    <span className="info-field">Dueño del Libro: </span>
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