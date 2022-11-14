export default class librosServices {
    
    static datosHome(){

        return new Promise(async (resolve, reject) => {
            await fetch("http://localhost:3000/")
              .then((response) => {
                if (response.ok) {
                  return response.json();
                }
                reject(
                  "No hemos podido recuperar ese json. El código de respuesta del servidor es: " +
                    response.status
                );
              })
              .then((json) => resolve(json))
              .catch((err) => reject(err));
        })
    }   

            
    static datosMisPrestamos(){

        return new Promise(async (resolve, reject) => {
            await fetch("http://localhost:3000/mis_prestamos")
              .then((response) => {
                if (response.ok) {
                  return response.json();
                }
                reject(
                  "No hemos podido recuperar ese json. El código de respuesta del servidor es: " +
                    response.status
                );
              })
              .then((json) => resolve(json))
              .catch((err) => reject(err));
        })



    }

    static datosMisLibros(){

        return new Promise(async (resolve, reject) => {
            await fetch("http://localhost:3000/mis_libros")
              .then((response) => {
                if (response.ok) {
                  return response.json();
                }
                reject(
                  "No hemos podido recuperar ese json. El código de respuesta del servidor es: " +
                    response.status
                );
              })
              .then((json) => resolve(json))
              .catch((err) => reject(err));
        })



    }



 }
