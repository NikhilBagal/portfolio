import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className="main-sec">
            <div className="intro-text">
                <h1>Hello, I'm Nikhil Bagal.</h1>
                <h1>I'm a front-end web developer.</h1>
            </div>
            <div className="social-connect">
                <a href="https://github.com/NikhilBagal" target="_blank" rel="noopener noreferrer"><i class="fa fa-github" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/in/nikhil-bagal-4b9463149/" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="https://codepen.io/nikhilbagal" target="_blank" rel="noopener noreferrer"><i class="fa fa-codepen" aria-hidden="true"></i></a>
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
 
export default Main;