import axios from 'axios';
import Cookies from 'universal-cookie';

 const instance = axios.create({
    baseURL: 'http://localhost:3000'
  }); 
  
async function LoginUser(user, pass) {
    try {
        const data = {nombre: user, contrasenia: pass}
        const response = await instance.post(`/user/login`, data);
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

function isLoggedUser(){
  const cookie = new Cookies();
  if(cookie.get('login')){
      return true;
  }
  return false;
}

function getTokenUser(){
  const cookie = new Cookies();
  const reponse = cookie.get('login');
  if(reponse){
      return reponse;
  }
  return null;
}

function getUserName(){
  const cookie = new Cookies();
  return cookie.get('user');
}

export {LoginUser, isLoggedUser, getTokenUser, getUserName}