import React, { Component } from 'react';
import {withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {signIn} from  '../actions/';
import PropTypes, { func, bool} from 'prop-types';
import TextField from '@material-ui/core/TextField';
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
        const {formData} = this.state;
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
                        <TextField
                            id="outlined-multiline-static"
                            label="Enter Email"
                            style={{width: 400}}
                            type="name"
                            name="email"
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