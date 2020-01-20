import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Main from "./Main"
import About from './About'
import Work from './Work'
import Contact from './Contact'
import '../styles/style.css'

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Router basename="/portfolio">
                <div className="wrapper">
                    <Switch>
                        <Route path="/" exact component={Main}/>
                        <Route path="/about" component={About} />
                        <Route path="/work" component={Work} />
                        <Route path='/contact' component={Contact}/>
                    </Switch>
                </div>
            </Router>
            
        );
    }
}
 
export default Body;