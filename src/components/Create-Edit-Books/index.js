import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.desktop.css'
import { enviarForm } from './SaveNewBook';
import {getGeneros} from '../../services/librosServices';
import { getTokenUser } from '../../services/OauthServices';

function getImage(imagenPhoto) {
	return `http://localhost:3000/book/imagen/${imagenPhoto}`;
}

function DisableNonImage() {
	document.getElementById('image1').disabled = true;
	document.getElementById("image1").style.display = "none";
}

function CEBooks({libro,generos}) {
	if(libro === undefined){
		libro = {isbn: "",titulo: "", Autor:{nombre:""}, Genero:{nombre:""}, Editorial:{nombre:""}, Anio: "", Sinopsis: ""}
	}

	const navigate = useNavigate();
	const [selectedFile, setSelectedFile] = useState();
	const [preview, setPreview] = useState();

	useEffect(() => {
		if (!selectedFile) {
			setPreview(undefined)
			return
		}

		const objectUrl = URL.createObjectURL(selectedFile)
		setPreview(objectUrl)
		libro.image = preview;

		DisableNonImage();

		return () => URL.revokeObjectURL(objectUrl)
	}, [selectedFile])

	const onSelectFile = (e) => {
		if (!e.target.files || e.target.files.length === 0) {
			setSelectedFile(undefined)
			return
		}
		setSelectedFile(e.target.files[0])
	}


	function ImageSave() {

		const file = preview;
		const fileName = document.getElementById('ISBNLibro').value;

		const path = __dirname + '../../public/images/' + fileName;

		/*
		file.mv(path, (error) => {
			if (error) {
				console.error(error);
			};

			return

		});
		*/
	}

	return (
		<>
			<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin='anonymous' />
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
			<div className="body">

				<div className="container grid mt-5">
					<div className="imagen" width="416" height="416" >
						<img id="image1" src={libro.isbn === '' ? '/images/NoPhoto.jpg' : getImage(libro.isbn)} alt="" width="416" height="416"/>
						{selectedFile && <img src={preview} width="416" height="416" />}
						<input type="file" id="imageFile" accept='image/png, image/jpg' width="416" height="416"  onChange={onSelectFile} ></input>
						<div className="imagenButton">
							<label>Subi la foto de portada!</label>
						</div>
					</div>
					<div className="formulario">
						<form id="form" onSubmit={enviarForm}>
							<div className="campo">
								<label>ISBN:</label>
								<input defaultValue={libro.isbn} type="text" id="ISBN" placeholder="ISBN" required />
							</div>
							<div className="campo">
								<label >Titulo:</label>
								<input defaultValue={libro.titulo} type="text" id="Titulo" placeholder="Titulo" required />
							</div>
							<div className="campo">
								<label >Autor:</label>
								<input defaultValue={libro.Autor.nombre} type="text" id="autor" placeholder="Autor del libro" required />
							</div>
							<div className="campo">
								<label htmlFor="generos">Genero:</label>
								<select  id="generos" name="generos">
								{generos.map((e,i)=>{
									if(e.nombre === libro.Genero.nombre){
										return(<option selected key={i} value={e.nombre}>{e.nombre}</option>)
									}
									return(<option key={i} value={e.nombre}>{e.nombre}</option>)
								})}
								</select>
							</div>
							<div className="campo">
								<label >Editorial:</label>
								<input defaultValue={libro.Editorial.nombre} type="text" id="editorial" placeholder="Editorial" required />
							</div>
							<div className="campo">
								<label >Año:</label>
								<input defaultValue={libro.anio} type="text" id="Anio" placeholder="Anio" required />
							</div>
							<div className="campo">
								<label >Sinopsis:</label>
								<input defaultValue={libro.sinopsis} type="textarea" className="Sinopsis" id="Sinopsis" placeholder="Sinopsis" />
							</div>
							<input defaultValue={libro.isbn} className="ISBNLibro" id="ISBNLibro" type="hidden" />
							<input defaultValue={libro.id} className="idEjemplar" id="idEjemplar" type="hidden" />
							<div id="buttonGuardar">
								<button type="submit" className="btn btn-success" value="submit" onClick={() => { ImageSave() }} >Guardar</button>
							</div>
							<div id="buttonVolver">
								<button type="button" className="btn btn-success" onClick={() => navigate(-1)} >Volver y descartar</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<script src="./SaveNewBook.js"></script>
		</>
	)

}

export default CEBooks;