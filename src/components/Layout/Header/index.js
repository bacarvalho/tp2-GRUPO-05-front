import React from 'react';
import Libro from './Images/libro';

function Header({children}) {
  return (
      <div className='header-container'>
        <div>
          <Libro/>
        </div>
        <div className='header-links-container'>
          <a href='' className='header-link'>Inicio</a>
          <a href='' className='header-link'>Mis Libros</a>
          <a href='' className='header-link'>Mis Prestamos</a>
        </div>
      </div>
  );
}

export default Header;
