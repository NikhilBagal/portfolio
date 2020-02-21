import React from 'react';
import { Link } from 'react-router-dom'

const Work = () => {
    return ( 
        <div className="work-sec">
            <div className="project-sec">
                <div className="project" id="rock-game">
                    <h1>Rock-Paper-Scissors Game</h1>
                    <div className="info-sec">
                        <img src="https://rel.ink/kz7een" alt=""></img>
                        <div className="info-text">
                            <p>Created using React and React-Router and Context API used for state management,Scss used for styling.</p>
                            <a href="https://nikhilbagal.github.io/rock-paper-scissors/" target="_blank" rel="noopener noreferrer">Live Page URL</a>
                        </div>
                    </div>
                </div>
                <div className="project" id="rest-country">
                    <h1>Countries Information</h1>
                    <div className="info-sec">
                        <img src="https://rel.ink/kd7NWg" alt=""></img>
                        <div className="info-text">
                            <p>Created using vanillaJS and Rest countries API used for data with theme Change feature and Scss used
                            for style</p>
                            <a href="https://nikhilbagal.github.io/rest-countries/" target="_blank" rel="noopener noreferrer">Live Page URL</a>
                        </div>
                    </div>
                </div>
                <div className="project" id="url-shortner">
                    <h1>URL Shortner</h1>
                    <div className="info-sec">
                        <img src={require('../desktop-design.jpg')} alt=""></img>
                        <div className="info-text">
                            <p>Created using React and Relink API used for link shortening and local storage used for data storing</p>
                            <a href="https://nikhilbagal.github.io/url-shortner/" target="_blank" rel="noopener noreferrer">Live Page URL</a>
                        </div>
                    </div>
                </div>
                <div className="project" id="bookmark-page">
                    <h1>Bookmark Landing Page</h1>
                    <div className="info-sec">
                        <img src="https://rel.ink/gN7Nek" alt=""></img>
                        <div className="info-text">
                            <p>Responsive page created using HTML,Scss and used vanillaJS for functionality</p>
                            <a href="https://nikhilbagal.github.io/bookmark-landing-page-master/" target="_blank" rel="noopener noreferrer">Live Page URL</a>
                        </div>
                    </div>
                </div>
                <div className="project" id="bookmark-page">
                    <h1>Sign Up Form</h1>
                    <div className="info-sec">
                        <img src="https://rel.ink/nWPA79" alt=""></img>
                        <div className="info-text">
                            <p>Responsive page with custom client side user input errors created using HTML,Scss and vanillaJS for error
                                handling</p>
                            <a href="https://nikhilbagal.github.io/intro-component-with-signup-form-master/" target="_blank" rel="noopener noreferrer">Live Page URL</a>
                        </div>
                    </div>
                </div>
                <div className="project" id="bookmark-page">
                    <h1>Project tracking intro Page</h1>
                    <div className="info-sec">
                        <img src="https://rel.ink/n2pPeg" alt=""></img>
                        <div className="info-text">
                            <p>Responsive Project tracking intro Page created using HTML,CSS and JavaScript</p>
                            <a href="https://nikhilbagal.github.io/project-tracking-intro-component-master/" target="_blank" rel="noopener noreferrer">Live Page URL</a>
                        </div>
                    </div>
                </div>
                <div className="project" id="bookmark-page">
                    <h1>Product coming soon page</h1>
                    <div className="info-sec">
                        <img src="https://rel.ink/9vbP89" alt=""></img>
                        <div className="info-text">
                            <p>Responsive page created using HTML,CSS</p>
                            <a href="https://nikhilbagal.github.io/apparel-comingsoon/" target="_blank" rel="noopener noreferrer">Live Page URL</a>
                        </div>
                    </div>
                </div>
                <div className="project" id="bookmark-page">
                    <h1>Pricing Page</h1>
                    <div className="info-sec">
                        <img src="https://rel.ink/kXqPen" alt=""></img>
                        <div className="info-text">
                            <p>Responsive Pricing page created using HTML,SCSS,TypeScript.Used Gulp for Task Automation
                            </p>
                            <a href="https://nikhilbagal.github.io/pricing-page/" target="_blank" rel="noopener noreferrer">Live Page URL</a>
                        </div>
                    </div>
                </div>
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
 
export default Work
