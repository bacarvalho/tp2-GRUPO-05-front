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

function enviarForm(e){
  e.preventDefault();
  const ISBNLibro = document.getElementById('ISBNLibro').value
  const id = document.getElementById('idEjemplar').value
  const ISBN = document.getElementById('ISBN').value  
  const titulo = document.getElementById('Titulo').value  
  const autor = document.getElementById('autor').value 
  const genero = document.getElementById('genero').value 
  const editorial = document.getElementById('editorial').value
  const Sinopsis = document.getElementById('Sinopsis').value
  const Anio = document.getElementById('Anio').value
  const Image = document.getElementById('imageFile').value

  console.log(ISBN);
  console.log(titulo);
  console.log(autor);
  console.log(genero);
  console.log(editorial);
  console.log(Sinopsis);
  console.log(Anio);
  console.log(Image);
  console.log(id);

  var file = new File([Image], Image.name);
  const path = __dirname + '../../public/images/' + ISBN;

  file.mv(path, (error) => {
    if (error) {
      console.error(error);
    };

    return

  });

  if(titulo === '' || autor === '' || genero === '' || editorial === '' || ISBN === '' || Anio === ''){
    interfaz.mostrarAlerta('Todos los campos son obligatorios', 'error')
    return 
  }
  
  const libroObj = {
    isbn:ISBN,
    titulo:titulo,
    id_autor:autor,
    id_genero:genero,
    id_editorial:editorial,
    imagen_portada: ISBN,
    sinopsis:Sinopsis,
    anio:Anio,
    id: id,
    
  }

  if (ISBNLibro === ''){
    agregarLibro(libroObj,getTokenUser());
  } else {
    editarLibro(libroObj,getTokenUser());
  }
  
  
}

export {enviarForm};