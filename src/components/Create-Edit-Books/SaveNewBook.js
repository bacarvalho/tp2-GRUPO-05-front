import { agregarLibro, editarLibro } from "../../services/librosServices";
import { getTokenUser } from "../../services/OauthServices";
 

const formulario = document.querySelector('form')

class Interfaz{

  mostrarAlerta(mensaje, tipo){
    const divAlert = document.createElement('div')
    divAlert.classList.add('alert', 'd-block','text-center', 'col-12', 'mt-2')

    if(tipo === 'error'){
      divAlert.classList.add('alert-danger')
    } else {
      divAlert.classList.add('alert-success')
    }
    divAlert.textContent = mensaje

    formulario.appendChild(divAlert)

    setTimeout(() => {
      divAlert.remove()
    }, 3000)

  }
}


const interfaz = new Interfaz()

function enviarForm(e,selectedFile){
  
  e.preventDefault();
  const ISBNLibro = document.getElementById('ISBNLibro').value
  const ISBN = document.getElementById('ISBN').value  
  const titulo = document.getElementById('Titulo').value  
  const autor = document.getElementById('autor').value 
  const genero = document.getElementById('generos').value
  const editorial = document.getElementById('editorial').value
  const Sinopsis = document.getElementById('Sinopsis').value
  const Anio = document.getElementById('Anio').value


  
  if(titulo === '' || autor === '' || genero === '' || editorial === '' || ISBN === '' || Anio === '' || !selectedFile){
    interfaz.mostrarAlerta('Todos los campos son obligatorios', 'error')
    return 
  }

  let fd = new FormData()
  
  fd.append('imageFile',selectedFile,selectedFile.name)
  fd.append('isbn',parseInt(ISBN,10))
  fd.append('titulo',titulo)
  fd.append('autor',autor)
  fd.append('genero',genero)
  fd.append('editorial',editorial)
  fd.append('sinopsis',Sinopsis)
  fd.append('anio',Anio)
  
  // const libroObj = {
  //   isbn:parseInt(ISBN,10),
  //   titulo:titulo,
  //   autor:autor,
  //   genero:genero,
  //   editorial:editorial,
  //   imagen_portada: ISBN + ".jpg",
  //   sinopsis:Sinopsis,
  //   anio:Anio,
    
  // }

  if (ISBNLibro === ''){
    // agregarLibro(libroObj,getTokenUser());
    agregarLibro(fd,getTokenUser());
  } else {
    // editarLibro(libroObj,getTokenUser());
    editarLibro(fd,getTokenUser());
  }
  
  
}

export {enviarForm};