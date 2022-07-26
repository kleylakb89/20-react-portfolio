import React from 'react';

function Navigation({ setPage }) {
  return (
    <div className='row d-flex'>
      <a href='#about' className='col-12 col-md-3' onClick={() => setPage('about')}>About Me</a>
      <a href='#portfolio' className='col-12 col-md-3' onClick={() => setPage('portfolio')}>Portfolio</a>
      <a href='#contact' className='col-12 col-md-3' onClick={() => setPage('contact')}>Contact</a>
      <a href='#resume' className='col-12 col-md-3' onClick={() => setPage('resume')}>Resume</a>
    </div>
  );
};

export default Navigation;