import React, {Component} from 'react';
import {withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {signUp} from '../actions/';
import '../App.css';
import PropTypes, { func, bool} from 'prop-types';

import TextField from '@material-ui/core/TextField';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: { // set up default form values
                email: "",
                password: "",
                username:""
            },
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        const {formData} = this.state;

        this.setState({
            formData: {
                ...formData, // leave other values unchanged
                [event.target.name]: event.target.value, // update the changed value
            }
        });
    }

    // ...
    handleSubmit(event) {
        event.preventDefault();
        const {formData}=this.state;
        let  {email, password,username} = formData;
        let creds = {
            email,
            password,
            username
        }
        // console.log(creds);
       this.props.signUp(creds);
   
    }

    render() {
        const {authError, userId} = this.props
        if (userId) return <Redirect to='/dashboard' />
        return (
            
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Sign Up</h1>
                        <div className="center red-text">
                            {authError
                                ? <p>
                                        {authError}
                                    </p>
                                : null}
                        </div>
                        <form onSubmit={this.handleSubmit}>

                            <TextField
                                id="outlined-multiline-static"
                                label="Enter Username"
                                style={{width: 400}}
                                type="name"
                                name="username"
                                value={this.state.formData.username}
                                margin="normal"
                                variant="outlined"
                                onChange={this.handleChange} 
                            />
                           <TextField
                                id="outlined-multiline-static"
                                label="Enter Email"
                                style={{width: 400}}
                                type="name"
                                name="email"
                                value={this.state.formData.email}
                                margin="normal"
                                variant="outlined"
                                onChange={this.handleChange} 
                               />
                      
                            <TextField
                                id="outlined-multiline-static"
                                label="Enter Password"
                                style={{width: 400}}
                                type="password"
                                name="password"
                                value={this.state.formData.password}
                                margin="normal"
                                variant="outlined"
                                onChange={this.handleChange} 
                            />
                               <br></br>
                               <br></br>
                           <button className="btn btn-outline-primary myForm">Submit</button>                          
                        </form>
                    </div>

                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
  user: state.firebase.auth,
  authError: state.auths.authError,
  userId: state.auths.userId
})

const mapDispatchToProps = (dispatch) => ({
    signUp: (user) => dispatch(signUp(user))

});

SignUp.propTypes = {
    signUp: PropTypes.func,
    userId: PropTypes.string,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));