import { agregarLibro } from "../../services/librosServices";

const formulario = document.querySelector('#form')

eventListeners()
function eventListeners(){
  formulario.addEventListener('submit', enviarForm)
}

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
  e.preventDefault()

  const ISBN = document.querySelector('#ISBN').value  
  const titulo = document.querySelector('#Titulo').value  
  const autor = document.querySelector('#autor').value 
  const genero = document.querySelector('#genero').value 
  const editorial = document.querySelector('#editorial').value
  const Sinopsis = document.querySelector('#Sinopsis').value
  const Anio = document.querySelector('#Anio').value
  
  
  if(titulo === '' || autor === '' || genero === '' || editorial === '' || ISBN === '' || Anio === ''){
    interfaz.mostrarAlerta('Todos los campos son obligatorios', 'error')
    return 
  }
  
  const libroObj = {
    ISBN:ISBN,
    titulo:titulo,
    id_autor:autor,
    id_genero:genero,
    id_editorial:editorial,
    sinopsis:Sinopsis,
    anio:Anio,
    
  }
  
  if (libro.isbn === ''){
     agregarLibro(libroObj);
    formulario.reset()
  } else {
  //	editarLibro(); //Endpoint de editar.
  }
  
  
}