import React from 'react';
import Project from './Project';

const projects = [
  {
    title: 'BookNook',
    image: '/images/book-nook.png',
    github: 'https://github.com/kleylakb89/book-nook',
    deployed: 'https://dry-bastion-57106.herokuapp.com/'
  },
  {
    title: 'Pantry Prepper',
    image: '/images/pantry-prepper-landing-page.png',
    github: 'https://github.com/kleylakb89/pantry-prepper',
    deployed: 'https://kleylakb89.github.io/pantry-prepper/'
  },
  {
    title: 'PWA Text Editor',
    image: '/images/text-editor.png',
    github: 'https://github.com/kleylakb89/19-pwa-text-editor',
    deployed: 'https://blooming-shelf-15321.herokuapp.com/'
  },
  {
    title: 'Tech Blog',
    image: '/images/blog-homepage.png',
    github: 'https://github.com/kleylakb89/14-tech-blog',
    deployed: 'https://morning-refuge-95641.herokuapp.com/'
  },
  {
    title: 'Employee Tracker',
    image: '/images/employee-tracker.png',
    github: 'https://github.com/kleylakb89/12-employee-tracker',
    deployed: 'https://drive.google.com/file/d/1EnTavy77JiLVqjEp2L8-BcIJaMwuExiA/view'
  },
  {
    title: 'Note Taker',
    image: '/images/note-landing-page.png',
    github: 'https://github.com/kleylakb89/11-note-taker',
    deployed: 'https://damp-sierra-92977.herokuapp.com/'
  },
]

function Portfolio() {
  return (
    <>
      <h2 className='text-center'>Portfolio</h2>
      <Project projects={projects} />
    </>
  )
};

export default Portfolio;