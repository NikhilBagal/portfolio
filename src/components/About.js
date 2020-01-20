import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-sec">
            <img src={require("../NikEdit.png") } alt="self" className="portrait-img"/>
            <div className="text-sec">
                <h1>Hello There,</h1>
                <p>Myself Nikhil Bagal.A Self thought front-end web developer based in pune.<br></br>
                    I develope Static and Dynamic WebPages and Single Page Applications mainly using React.<br></br>
                    NowDays I'm learning Node.js and BackEnd Stuff.
                </p>
                <h3>My Skills: </h3>
                <ul>
                    <li><h4>Languages: </h4><p>HTML,CSS,Javascript,TypeScript,Jquery</p></li>
                    <li><h4>FrameWorks: </h4><p>React.js,Redux</p></li>
                    <li><h4>Tools: </h4><p>Git,Chrome Dev Tools</p></li>
                </ul>
                
            </div>
            <a href="https://rel.ink/kXaA5n" className="resume-txt" target="_blank" rel="noopener noreferrer">Resume</a>
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