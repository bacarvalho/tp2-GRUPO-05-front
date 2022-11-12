import React from 'react';
import Libro from './Images/libro';

function Home({children}) {
  return (
      <div>
        <h1>
          Hola Bauti
        </h1>
        {children}
      </div>
  );
}

export default Home;
