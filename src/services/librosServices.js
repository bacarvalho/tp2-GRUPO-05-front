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

async function datosMisLibros(token) {

  try {
    const response = await instance.get('/user/mis_libros',   {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
 
    if (response.status === 200) {

      console.log(response.data);
      const libros = response.data;
      return { status: true, data: libros };
    }
  } catch (error) {
    console.log(error);
    return { status: false, data: error.message };
  }

}

export { getLibros, datosMisPrestamos, datosMisLibros };