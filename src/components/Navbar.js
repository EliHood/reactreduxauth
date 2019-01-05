import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
import SignUp from './SignUp';
import SignIn from './SignIn';

export const history = createBrowserHistory({forceRefresh:true});

const Navbar = () => {
    return(
        
    <Router history={history}>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
            <ul className="navbar-nav">

                <li className="nav-item">
                    <Link  className="nav-link" to="/">Home </Link>
                </li>  
                <li className="nav-item">
                    <Link className="nav-link" to="/SignUp">Sign Up </Link>
                </li>
                <li className="nav-item">
                    <Link  className="nav-link" to="/SignIn">Sign In </Link>
                </li>
              

            </ul>
          </div>
        </nav>
        <Route path="/SignUp" component={SignUp} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/" />
        
    </div>
    </Router>
    );

}

export default Navbar;