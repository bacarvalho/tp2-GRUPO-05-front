import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import './styles.desktop.css'



function getImage(imagenPhoto){
	const image = 'images/' + imagenPhoto;
	return image.toString();
}

function DisableNonImage(){
	document.getElementById('image1').disabled = true;
	document.getElementById("image1").style.display = "none";


}



function CEBooks( /* {libro} */) {
	const navigate = useNavigate();

	const libro = {
		isbn: '123',
		titulo: '',
		image: '',
		editorial: 'a',
	};

	const [selectedFile, setSelectedFile] = useState();
	const [preview, setPreview] = useState();
  
	// create a preview as a side effect, whenever selected file is changed
	useEffect(() => {
		if (!selectedFile) {
			setPreview(undefined)
			return
		}
  
		const objectUrl = URL.createObjectURL(selectedFile)
		setPreview(objectUrl)
		libro.image = preview;
		
		DisableNonImage();

		// free memory when ever this component is unmounted
		return () => URL.revokeObjectURL(objectUrl)
	}, [selectedFile])
  

  

  const onSelectFile = (e) => {
	if (!e.target.files || e.target.files.length === 0) {
		setSelectedFile(undefined)
		return
	}
	setSelectedFile(e.target.files[0])
}
	

    return(
	<>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
	<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
	<div class = "body">

    <div class="container grid mt-5">
        <div class="imagen">
            <img id="image1" src={libro.image === '' ? 'images/NoPhoto.jpg' :  getImage(libro.image) } alt=""/> 
			{selectedFile &&  <img src={preview} width="416" height="416" /> }
			<input type="file" id="imageFile" accept='image/png, image/jpg' onChange={onSelectFile} ></input>
            <div class="imagenButton">
				<label>Subi la foto de portada!</label>
            </div>
        </div>
        <div class="formulario">
            <form id="form">
				<div class="campo">
						<label for="ISBN">ISBN:</label>
						<input defaultValue={libro.isbn} type="text" id="ISBN" placeholder="ISBN" required/>
				</div>
				<div class="campo">
					<label for="Titulo">Titulo:</label>
					<input  defaultValue={libro.titulo} type="text" id="Titulo" placeholder="Titulo" required/>
				</div>
				<div class="campo">
					<label for="Autor">Autor:</label>
					<input defaultValue={libro.autor} type="text" id="autor" placeholder="Autor del libro" required/>
				</div>
				<div class="campo">
					<label for="Genero">Genero:</label>
					<input  defaultValue={libro.genero} type="text" id="genero" placeholder="Genero" required/>
				</div>
				<div class="campo">
					<label for="Editorial">Editorial:</label>
					<input  defaultValue={libro.editorial} type="text" id="editorial" placeholder="Editorial" required/>
				</div>
				<div class="campo">
					<label for="Anio">Año:</label>
					<input  defaultValue={libro.anio} type="text" id="Anio" placeholder="Anio" required/>
				</div>
				<div class="campo">
					<label for="Sinopsis">Sinopsis:</label>
					<input  defaultValue={libro.sinopsis} type="textarea" class="Sinopsis" placeholder="Sinopsis"/>
				</div>
				<div id="buttonGuardar">
                <button type="submit" class="btn btn-success" >Guardar</button>
				</div>
				<div id="buttonVolver">
                <button type="button" class="btn btn-success" onClick={() => navigate(-1)} >Volver y descartar</button>
            	</div>
			</form>
		</div>
    </div>
	</div>
	</>
    )


}

export default CEBooks;