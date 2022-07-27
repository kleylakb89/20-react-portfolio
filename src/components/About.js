import React from 'react';
import headshot from '../images/profile-pic.jpg';

function About() {
  return (
    <div className='row mt-5'>
      <h2 className='col-12 text-center'>About Me</h2>
      <img src={headshot} alt='Headshot' className='col-2 rounded-circle m-3'></img>
      <p className='col-12 col-md-9 mt-5'>Software developer with experience leading teams up to twenty people to maximize efficiency and oversee collaborative creative environments. Previous experience includes planning and launching a private business that involved resource and time management, customer service skills, and active problem-solving. Maintains a high standard of work ethic and self-teaching. Currently enrolled in the Full Stack Web Development course at UNC Charlotte Boot Camp, set to receive a certificate in August, 2022 for front and back-end development including JavaScript, Express, and RESTful APIs. Excited to apply skills in problem-solving and leadership to software development while continuing to learn and flourish.</p>
    </div>
  )
};

export default About;