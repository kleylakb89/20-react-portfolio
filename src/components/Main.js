import React, { useState } from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

function Main() {
  const [page, setPage] = useState('about');
  let CurrentPage;

  if (page === 'about') CurrentPage = About;
  if (page === 'portfolio') CurrentPage = Portfolio;
  if (page === 'contact') CurrentPage = Contact;
  if (page === 'resume') CurrentPage = Resume;


};

export default Main;