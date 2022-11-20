import React from 'react';
import Libro from './Images/libro';
import Avatar from './Images/avatar';

function Header( {isLogged} ) {

  function createAccount() {
    window.location.href = '/createAccount'
  }
  
  //TODO: Cambiar de a para <Link>

  return (
    <div className='header-container'>
      <div className='header-image'>
        <Libro />
      </div>
      <div className='header-links-container'>
        <a href='' className='header-link' >Inicio</a> 
        <a href='' className='header-link' >Mis Libros</a>
        <a href='' className='header-link' >Mis Prestamos</a>
      </div>
      <div className='header-avatar-container'>
          {!isLogged ? (
            <div>
              <a className='header-link' href='/login' >Ingresar</a>
              <button className='header-login-button' onClick={createAccount}>Crear cuenta</button>
            </div>
          ) : 
            <Avatar /> 
          } 
      </div>
    </div>
  );
}

export default Header;
