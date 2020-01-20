import React from 'react';
import { Link } from 'react-router-dom'

const Work = () => {
    return ( 
        <div className="work-sec">
            <nav>
                <Link to="/"><p>Home</p></Link>
                <Link to="/about"><p>About</p></Link>
                <Link to="/work"><p>My Work</p></Link>
                <Link to="/contact"><p>Contact</p></Link>
            </nav>
        </div>
     );
}
 
export default Work
