import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Post from './Post';
import { connect } from 'react-redux'
import {signOut} from '../actions/';
import Dashboard from './Dashboard';
import PropTypes, { func, bool} from 'prop-types';

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
            {!props.isAuthenticated && ( 
                <li className="nav-item">
                    <Link  className="nav-link" to="/">Home </Link>
                </li>  
            )}
             {props.isAuthenticated && (   
                <li className="nav-item">
                    <Link  className="nav-link" to="/dashboard">Dashboard </Link>
                </li>
            )}

                {!props.isAuthenticated && (
                    <li className="nav-item">
                        <Link  className="nav-link" to="/SignIn">Sign-In</Link>
                    </li>
                    
                )}
                {!props.isAuthenticated && (        
                    <li className="nav-item">
                        <Link className="nav-link" to="/SignUp">Sign Up </Link>
                    </li> 
                )}

                 {props.isAuthenticated && (        
                    <li className="nav-item">
                        <Link className="nav-link" to="/Post">Add-Post </Link>
                    </li> 
                )}         
                {props.isAuthenticated && (   
                    <button className="btn btn-outline-primary btn-sm" onClick={() => props.signOut()}>Log out</button>
                )}
     
            </ul>
          </div>
        </nav>
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Post" component={Post} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
       
    </div>
    </Router>
    );

}

const mapStateToProps = (state) => ({

    isAuthenticated: state.auths.isAuthenticated

});

const mapDispatchToProps = (dispatch) => ({

    signOut: () => dispatch(signOut())

});

Navbar.propTypes = {
    isAuthenticated:PropTypes.bool,
    signOut:PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

