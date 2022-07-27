import React from 'react';
import Navigation from './Navigation';
// import '../styles/header.css';

function Header({setPage}) {
  return (
    <header className='row d-flex align-items-center justify-content-around'>
      <h1 className='col-12 col-md-5 m-1'>Kristin Kleyla</h1>
      <nav className='col-12 col-md-6'>
        <Navigation setPage={setPage}/>
      </nav>
    </header>
  );
};

export default Header;