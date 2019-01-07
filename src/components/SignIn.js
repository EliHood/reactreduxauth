import React, { Component } from 'react';
import {withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {signIn} from  '../actions/';
import PropTypes, { func, bool} from 'prop-types';
class SignIn extends Component{

    constructor(props){
        super(props);

        this.state = {
            formData:{
                email: '',
                password: '',
            },
            errors:{}
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange = e => {
        console.log(e.target.name);
        const { formData } = this.state
        this.setState({
          formData: {
            ...formData,
            [e.target.name]: e.target.value
          }
        });
      };

    handleSubmit = (e) => {
        e.preventDefault();  
        const {formData, errors} = this.state;
        const {email, password} = formData;

        const creds = {
            email,
            password
        }
        
        
        const signin = this.props.signIn(creds);

        if(signin){
            console.log(creds);
        }

    }


    render(){
        const {authError,userId} = this.props
        if (userId) return <Redirect to='/dashboard' />
        return(
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>Sign In</h1>

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
                                id="exampleInputEmail1"
                                onChange={this.handleChange}
                                aria-describedby="emailHelp"
                                placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input
                                name="password"
                                onChange={this.handleChange}
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"/>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

            </div>
        </div>         
        )
    }

}

const mapStateToProps = (state) => ({
    user: state.firebase.auth,
    authError: state.auths.authError,
    userId: state.auths.userId
})
  
const mapDispatchToProps = (dispatch) => ({
      signIn: (user) => dispatch(signIn(user))
  
});

  SignIn.propTypes = {
    signIn: PropTypes.func,
    userId: PropTypes.string,
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));