import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Please enter a valid email');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`Please enter a ${e.target.name}.`);
            } else {
                setErrorMessage('');
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
    };

    return (
        <section>
            <h2>Contact Form</h2>
            <hr></hr>
            <form>
                <div className='form-group w-50'>
                    <label htmlFor="name">Name:</label>
                    <input className="form-control" type="text" name="name"  defaultValue={name} onBlur={handleChange}/>
                </div>
                
                <div className=' form-group w-50' >
                    <label htmlFor="email">Email Address:</label>
                    <input className="form-control" type="email"  name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div className=' form-group w-50'>
                    <label htmlFor="message">Message:</label>
                    <textarea  className="form-control"name="message" defaultValue={message} onBlur={handleChange} rows="7" />
                </div> 
                {errorMessage && (
                <div >
                    <p className="alert alert-warning">{errorMessage}</p>
                </div>
                )}
    
                <div class="form-group" >
                <button data-testid="button" class="btn btn-info text-light" type="submit" onSubmit={handleSubmit}>Submit</button>
                </div>
            </form>
        </section>
        );
  

  
}


export default Contact