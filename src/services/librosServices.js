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

async function datosMisPrestamos(token) {
  try {
    const response = await instance.get('/user/mis_prestamos', {
      headers:{
        'Authorization': `Bearer ${token}`
      }
    })

    if (response.status === 200) {
      const libros = response.data;
      return { status: true, data: libros };
    }
    
  } catch (error) {
    return { status: false, data: error.message };
  }

}

async function datosMisLibros(token) {

  try {
    const response = await instance.get('/user/mis_libros',   {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    if (response.status === 200) {
      const libros = response.data;
      return { status: true, data: libros };
    }
  } catch (error) {
    return { status: false, data: error.message };
  }

}


async function getDetailsBook(bookId, token) {
  try {
    const response = await instance.get(`/catalog/detalles_libro/${bookId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    if (response.status === 200) {
      const libros = response.data;
      return { status: true, data: libros };
    }
  } catch (error) {
    return { status: false, data: error.message };
  }
}

async function devolverLibro(bookId, token) {
  try {
    const response = await instance.delete(`/prestamo/devolver/${bookId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    if (response.status === 200) {
      const libros = response.data;
      return { status: true, data: libros };
    }
  } catch (error) {
    return { status: false, data: error.response.data.error };
  }
}


async function solicitarLibro(bookId, token) {
  try {
    const response = await instance.get(`/prestamo/pedir/${bookId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    if (response.status === 200) {
      const texto = response.data;
      return { status: true, data: texto };
    }
  } catch (error) {
    return { status: false, data: error.response.data.error };
  }
}

async function eliminarLibro(bookId, token) {
  try {
    const response = await instance.delete(`/user/borrar_libro/${bookId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    if (response.status === 200) {
      const texto = response.data;
      return { status: true, data: texto };
    }
  } catch (error) {
    return { status: false, data: error.response.data.error };
  }
}


export { getLibros, datosMisPrestamos, datosMisLibros, getDetailsBook, solicitarLibro, devolverLibro, eliminarLibro };