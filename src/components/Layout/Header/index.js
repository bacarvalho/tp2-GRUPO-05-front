import React from 'react';
import { Link } from 'react-router-dom';
import Libro from './Images/libro';
import Avatar from './Images/avatar';

function Header( {isLogged} ) {

  function createAccount() {
    window.location.href = '/inProgress'
  }

  return (
    <div className='header-container'>
      <div className='header-image'>
        <Libro />
      </div>
      <div className='header-links-container'>
        <Link to='' className='header-link' >Inicio</Link> 
        <Link to='' className='header-link' >Mis Libros</Link>
        <Link to='' className='header-link' >Mis Prestamos</Link>
      </div>
      <div className='header-avatar-container'>
          {!isLogged ? (
            <div>
              <Link className='header-link' to='/login' >Ingresar</Link>
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
