const formulario = document.querySelector('#form')

eventListeners()
function eventListeners(){
  formulario.addEventListener('submit', enviarForm)
}

class Libro{
  constructor(){
    this.libros = []
  }

  agregarLibro(libro){
 
    })
  }
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
const libros = new Libro()

function enviarForm(e){
  e.preventDefault()

  const ISBN = document.querySelector('#ISBN').value  
  const libro = document.querySelector('#libro').value  
  const autor = document.querySelector('#autor').value 
  const genero = document.querySelector('#genero').value 
  const editorial = document.querySelector('#editorial').value
  const Sinopsis = document.querySelector('#Sinopsis').value

  if(libro === '' || autor === '' || genero === '' || editorial === '' || ISBN === ''){
    interfaz.mostrarAlerta('Todos los campos son obligatorios', 'error')
    return 
  }

  const libroObj = {
    ISBN:ISBN,
    libro:libro,
    autor:autor,
    genero:genero,
    editorial:editorial,
    Sinopsis:Sinopsis,
  }
  libros.agregarLibro(libroObj)
  interfaz.mostrarAlerta('Libro registrado perfectamente')
  formulario.reset()


}