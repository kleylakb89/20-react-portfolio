import React from 'react';

function Footer() {
  return (
    <footer className='row d-flex justify-content-center'>
      <div className='col-5 p-3 text-center'>
        <a href='https://github.com/kleylakb89'><img src='/images/github-logo.png' alt='GitHub' className='col-1 p-1'></img></a>
        <a href='https://www.linkedin.com/in/kristin-kleyla/'><img src='/images/linkedin-logo.png' alt='LinkedIn' className='col-1 p-1'></img></a>
        <a href='https://www.twitch.tv/normalnotincluded'><img src='/images/twitch-logo.png' alt='Twitch' className='col-1 p-1'></img></a>
      </div>
    </footer>
  );
};

export default Footer;