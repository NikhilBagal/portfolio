import React from 'react';
import Form from './Form';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
            <div className="contact-sec">
                <Form />
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