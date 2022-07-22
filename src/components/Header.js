import React from 'react';
import Navigation from './Navigation';

function Header() {
  return (
    <header className='row d-flex align-items-center justify-content-around'>
      <h1 className='col-12 col-md-6'>Kristin Kleyla</h1>
      <nav className='col-12 col-md-6'>
        <Navigation />
      </nav>
    </header>
  );
};

export default Header;