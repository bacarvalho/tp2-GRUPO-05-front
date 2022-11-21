import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000'
});

async function getLibros() {
  try {
    const response = await instance.get('/')
    if (response.status === 200) {
      const libros = response.data;
      return { status: true, data: libros };
    }
  } catch (error) {
    return { status: false, data: error.message };
  }
}

async function datosMisPrestamos() {
  try {
    const response = await instance.get('http://localhost:3000/mis_prestamos')
    console.log('LLEGA', response);
    if (response.status === 200) {

      console.log(response.data);
      const libros = response.data;
      return { status: true, data: libros };
    }
  } catch (error) {
    return { status: false, data: error.message };
  }

}

async function datosMisLibros() {

  try {
    const response = await instance.get('http://localhost:3000/mis_libros')
    console.log('LLEGA', response);
    if (response.status === 200) {

      console.log(response.data);
      const libros = response.data;
      return { status: true, data: libros };
    }
  } catch (error) {
    return { status: false, data: error.message };
  }

}


function agregarLibro(libro){
  try {
    const response =  instance.post(`/user/crear_libro`, libro);
    if (response.status === 200) {
      return { status: true};
    }
  } catch (error) {
    return { status: false, error: {
        status: error.response.status,
        message: error.response.data.error
    }};
  }
    
}

function editarLibro(libro){
  try {
    const response =  instance.post(`/user/editar_libro/:isbn_libro`, libro);
    if (response.status === 200) {
      return { status: true};
    }
  } catch (error) {
    return { status: false, error: {
        status: error.response.status,
        message: error.response.data.error
    }};
  }
    
}

export { getLibros, datosMisPrestamos, datosMisLibros, agregarLibro};