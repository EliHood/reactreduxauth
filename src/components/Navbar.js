import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { connect } from 'react-redux'
import {signOut} from '../actions/';
import Dashboard from './Dashboard';

export const history = createBrowserHistory({forceRefresh:true});

const Navbar = (props) => {
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
                    <Link  className="nav-link" to="/dashboard">Dashboard </Link>
                </li>
                <li className="nav-item">
                    <Link  className="nav-link" to="/SignIn">Sign-In</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/SignUp">Sign Up </Link>
                </li>
           
                <button className="btn btn-outline-primary" onClick={() => props.signOut()}>Log out</button>

            </ul>
          </div>
        </nav>
        <Route path="/SignUp" component={SignUp} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
       
    </div>
    </Router>
    );

}
const mapDispatchToProps = (dispatch) => ({

    signOut: () => dispatch(signOut())

});

export default connect(null, mapDispatchToProps)(Navbar)

