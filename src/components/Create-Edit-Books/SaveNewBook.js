import { agregarLibro, editarLibro } from "../../services/librosServices";


class Interfaz{
  
  mostrarAlerta(mensaje, tipo){
    const formulario = document.getElementById('form')
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
//e.preventDefault();
  console.log("Llega")
  const ISBNLibro = document.getElementById('ISBNLibro').value
  const ISBN = document.getElementById('ISBN').value  
  const titulo = document.getElementById('Titulo').defaultValue  
  const autor = document.getElementById('autor').defaultValue 
  const genero = document.getElementById('genero').defaultValue 
  const editorial = document.getElementById('editorial').defaultValue
  const Sinopsis = document.getElementById('Sinopsis').defaultValue
  const Anio = document.getElementById('Anio').defaultValue
const Image = document.getElementById('ImageBlob').value
console.log(Image);
  /*
  if(titulo === '' || autor === '' || genero === '' || editorial === '' || ISBN === '' || Anio === ''){
    interfaz.mostrarAlerta('Todos los campos son obligatorios', 'error')
    return 
  }
  */
  const libroObj = {
    ISBN:ISBN,
    titulo:titulo,
    id_autor:autor,
    id_genero:genero,
    id_editorial:editorial,
    sinopsis:Sinopsis,
    anio:Anio,
    image:Image,
  }
  debugger;
  //Cambiar BACKEND para que agergarLibro haga todo.
  if (ISBNLibro === ''){
    console.log(libroObj);
    agregarLibro(libroObj);
    //formulario.reset()
  } else {
    console.log('else');

    editarLibro(libroObj);
  }
  debugger;
  
}

export {enviarForm};