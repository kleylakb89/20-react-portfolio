import React, {useState} from 'react';
import {validateEmail} from '../utils/helpers';
import '../styles/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const {target} = e;
    const inputType = target.name;
    const inputValue = target.value;

    if(inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage('You must fill out all forms');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Email invalid');
      return;
    }
    
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <div className='row'>
      <h1 className='col-12 text-center'>Contact</h1>
      <form className='form col-12 text-center m-3'>
        <input
          value={name}
          name='name'
          onChange={handleInputChange}
          type='text'
          placeholder='Name'
          className='col-12 col-md-4 d-block m-auto'
        />
        <input
          value={email}
          name='email'
          onChange={handleInputChange}
          type='email'
          placeholder='Email'
          className='col-12 col-md-4 d-block m-auto'
        />
        <input
          value={message}
          name='message'
          onChange={handleInputChange}
          type='text'
          placeholder='Message me!'
          className='col-12 col-md-4 d-block m-auto'
        />
        <button type='button' onClick={handleFormSubmit} className='d-block m-auto'>
          Submit
        </button>
      </form>
      <div className='error-text text-center'>
        <p>{errorMessage}</p>
      </div>
    </div>
  )
};

export default Contact;