import React from 'react';
import Form from './Form';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-sec">
            
            <div className="text-sec">
                <img src={require("../NikEdit.png") } alt="self" className="portrait-img"/>
                <h1>Hello There,</h1>
                <p>Myself Nikhil Bagal.A Self thought front-end web developer based in pune.<br></br>
                    I develope Static WebPages and Single Page Applications mainly using React<br></br>
                    NowDays I'm learning Node.js and BackEnd Stuff.
                </p>
                <h3>My Skills: </h3>
                <ul>
                    <li>Languages: HTML,CSS,Javascript,TypeScript</li>
                    <li>FrameWorks: React.js</li>
                    <li>Tools: Git,Chrome Dev Tools</li>
                </ul>
            </div>
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
 
export default About;