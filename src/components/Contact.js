import React, {useState} from 'react';
import {validateEmail} from '../utils/helpers';

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
    <div>
      <h1>Contact</h1>
      <form className='form'>
        <input
          value={name}
          name='name'
          onChange={handleInputChange}
          type='text'
          placeholder='Name'
        />
        <input
          value={email}
          name='email'
          onChange={handleInputChange}
          type='email'
          placeholder='Email'
        />
        <input
          value={message}
          name='message'
          onChange={handleInputChange}
          type='text'
          placeholder='Message me!'
        />
        <button type='button' onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      <div className='error-text'>
        <p>{errorMessage}</p>
      </div>
    </div>
  )
};

export default Contact;