import axios from 'axios';

 const instance = axios.create({
    baseURL: 'http://localhost:3000'
  }); 
  
async function LoginUser(user, pass) {
    try {
        const data = {nombre: user, contrasenia: pass}
        const response = await instance.post(`http://localhost:3000/user/login`, data);
        if (response.status === 200) {
          return { status: true, data: response.data.token };
        }
      } catch (error) {
        return { status: false, error: {
            status: error.response.status,
            message: error.response.data.error
        }};
      }
  }

export {LoginUser}