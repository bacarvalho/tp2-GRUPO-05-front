import React from 'react';
import { agregarLibro } from '../../services/librosServices';

function getImage(imagenPhoto){
	const image = 'images/' + imagenPhoto;
	return image.toString();
}

function CEBooks( /* {libro} */) {

	const libro = {
		isbn: '1234',
		titulo: '',
		image: ''
	}

	function saveOrCreate(){
		if (libro.isbn === ''){
			agregarLibro();
		} else {
		//	editarLibro(); //Endpoint de editar.
		}
	}

	console.log(getImage('NoPhoto.jpg'));

    return(
	<>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
	<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
    <div class="container grid mt-5">
        <div class="imagen">
            <img src={libro.image === '' ? 'images/NoPhoto.jpg' :  getImage(libro.image) } alt=""/> 
            <div class="imagenButton">
                <button type="button" class="btn btn-success">Subir foto de portada</button>
            </div>
        </div>
        <div class="formulario">
            <form id="form">
				<div class="campo">
						<label for="ISBN">ISBN:</label>
						<input value={libro.isbn} type="text" id="ISBN" placeholder="ISBN" required/>
				</div>
				<div class="campo">
					<label for="Libro">Libro:</label>
					<input type="text" id="libro" placeholder="Libro" required/>
				</div>
				<div class="campo">
					<label for="Autor">Autor:</label>
					<input type="text" id="autor" placeholder="Autor del libro" required/>
				</div>
				<div class="campo">
					<label for="Genero">Genero:</label>
					<input type="text" id="genero" placeholder="Genero" required/>
				</div>
				<div class="campo">
					<label for="Editorial">Editorial:</label>
					<input type="text" id="editorial" placeholder="Editorial" required/>
				</div>
				<div class="campo">
					<label for="Anio">Año:</label>
					<input type="text" id="Anio" placeholder="Anio" required/>
				</div>
				<div class="campo">
					<label for="Sinopsis">Sinopsis:</label>
					<input type="textarea" class="Sinopsis" placeholder="Sinopsis"/>
				</div>
				<div id="buttonsForm">
                <button type="submit" class="btn btn-success" onClick={saveOrCreate()}>Guardar</button>
                <button type="button" class="btn btn-success" >Volver y descartar</button>
            	</div>
			</form>
		</div>
    </div>
	</>
    )


}

export default CEBooks;