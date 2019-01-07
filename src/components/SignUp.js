import React, {Component} from 'react';
import {withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {signUp, CurrentUser, onEmailSignUpChangeAction, onPasswordSignUpChangeAction} from '../actions/';
import '../App.css';
import { history } from '../components/Navbar';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: { // set up default form values
                email: "",
                password: ""
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
        const {formData, errors}=this.state;
        let  {email, password} = formData;
        let creds = {
            email,
            password
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
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={this.state.formData.email}
                                    onChange={this.handleChange}
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <div></div>
                                <input
                                    name="password"
                                    type="password"
                                    value={this.state.formData.password}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"/>

                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));