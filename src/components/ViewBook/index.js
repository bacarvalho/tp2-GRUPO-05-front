import React from "react";
import book from './book.json';

//usar getDetailsBook();

function getImage(imagenPhoto) {
    const image = 'images/' + imagenPhoto;
    return image.toString();
}

function refundBook(){
    console.log('refund');
};

function requestBook(){
    console.log('request');

};


const ViewBook = () => {
    const isDisable = false;
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
           
        </div>
    );
};

export default ViewBook;