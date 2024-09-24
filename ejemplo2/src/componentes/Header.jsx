import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li ><a className='letra' href="#gallery">Galería</a></li>
          <li><a className='letra' href="#artists">Artistas</a></li>
          <li><a className='letra' href="#booking">Reservar</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
