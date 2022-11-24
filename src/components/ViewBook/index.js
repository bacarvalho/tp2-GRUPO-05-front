import React from "react";
import book from './book.json';

//usar getDetailsBook();

function getImage(imagenPhoto){
	const image = 'images/' + imagenPhoto;
	return image.toString();
}


const ViewBook = () => {

    return (
        <div className="container">
            <div className="container-header">
                <div className="container-picture">
                    <img id="image1" src={book.Libro.imagen_portada === '' ? 'images/NoPhoto.jpg' :  getImage(book.Libro.imagen_portada) } alt=""/>
                </div>
                <div className="container-info">
                    <span>{book.Libro.titulo}</span>
                    <span>{book.Libro.Autor.nombre}</span>
                    <span>{book.Libro.Genero.nombre}</span>
                    <span>{book.Libro.Editorial.nombre}</span>
                    <span>{book.Libro.anio}</span>
                    <span>{book.Libro.isbn}</span>
                </div>
            </div>
            <div className="container-body">
                    {book.Libro.sinopsis}
            </div>
            <button>Devolver</button>
        </div>
    );
};

export default ViewBook;