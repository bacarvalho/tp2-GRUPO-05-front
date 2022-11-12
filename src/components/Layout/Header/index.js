import React from 'react';
import Libro from './Images/libro';
import Avatar from './Images/avatar';

function Header( isLogged ) {


  return (
    <div className='header-container'>
      <div className='header-image'>
        <Libro />
      </div>
      <div className='header-links-container'>
        <a href='' className='header-link'>Inicio</a>
        <a href='' className='header-link'>Mis Libros</a>
        <a href='' className='header-link'>Mis Prestamos</a>
      </div>
      <div className='header-avatar-container'>
        {isLogged ? <Avatar /> :
          <div></div>
        }
      </div>
    </div>
  );
}

export default Header;
