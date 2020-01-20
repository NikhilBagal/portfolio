import React from 'react';
import Form from './Form';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
            <div className="contact-sec">
                <Form />
                <div className="personal-contact">
                    <p>Mobile No: 9421036521</p>
                    <p>Email: nbagal02@gmail.com</p>
                </div>
                <nav>
                    <Link to="/"><p>Home</p></Link>
                    <Link to="/about"><p>About</p></Link>
                    <Link to="/work"><p>My Work</p></Link>
                    <Link to="/contact"><p>Contact</p></Link>
                </nav>
            </div>
    );
}
 
export default Contact;