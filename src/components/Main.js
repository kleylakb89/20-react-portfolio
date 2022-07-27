import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
// import '../styles/main.css';

function Main() {
  const [page, setPage] = useState('about');
  let CurrentPage;

  if (page === 'about') CurrentPage = About;
  if (page === 'portfolio') CurrentPage = Portfolio;
  if (page === 'contact') CurrentPage = Contact;
  if (page === 'resume') CurrentPage = Resume;

  return (
    <>
      <Header setPage={setPage} />
      <CurrentPage />
      <Footer />
    </>
  );
};

export default Main;