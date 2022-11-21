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
    const response = await instance.get('/mis_prestamos')
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
    const response = await instance.get('/mis_libros')
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

export { getLibros, datosMisPrestamos, datosMisLibros };