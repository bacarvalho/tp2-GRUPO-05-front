import React from 'react';
import { Link } from 'react-router-dom';
import Libro from './Images/libro';
import Cookies from "universal-cookie";

function Header( {isLogged} ) {

  function createAccount() {
    window.location.href = '/inProgress'
  }

  function LogOut() {
    const cookie = new Cookies();
    cookie.remove('login');
    window.location.reload(true);
  }

  return (
    <div className='header-container'>
      <div className='header-image'>
        <Libro />
      </div>
      <div className='header-links-container'>
        <Link to='/' className='header-link' >Inicio</Link> 
        <Link to='/books/my_books' className='header-link' >Mis Libros</Link>
        <Link to='/my_loans' className='header-link' >Mis Prestamos</Link>
      </div>
      <div className='header-avatar-container'>
          {!isLogged ? (
            <div>
              <Link className='header-link' to='/login' >Ingresar</Link>
              <button className='header-login-button' onClick={createAccount}>Crear cuenta</button>
            </div>
          ) : 
          <div className='header-logout-container'>
            <img src="/images/exitv2.svg" className='header-logout-buttons' onClick={LogOut}/>
            <span onClick={LogOut} className='header-logout-buttons'>Salir</span>
          </div>
          } 
      </div>
    </div>
  );
}

export default Header;
