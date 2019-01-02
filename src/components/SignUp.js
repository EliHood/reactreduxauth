import React, { Component } from 'react';
import { withRouter} from "react-router-dom";
import { connect } from "react-redux";
import { signUp, onEmailSignUpChangeAction, onPasswordSignUpChangeAction } from '../actions/';
class SignUp extends Component {
  state = {
    email: "",
    password: ""
  }

  // onChange = (e) =>{
  //   this.setState({
  //       [e.target.name] : e.target.value
  //   })
  // }
  handleSubmit = (e) => {
    e.preventDefault();
    const {_email, _password} = this.props;
    const creds = {_email, _password}
    if(creds){
      this.props.signUp(creds);
      this.setState({
        _email: '',
        _password: ''
      });
      this.props.history.push('/');
      console.log(creds);
     
    }
  

  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Sign Up</h1>
            <form  onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"          
                  className="form-control"
                  id="email"
                  onChange={this.props.onEmailSignUpChangeAction}
                  aria-describedby="emailHelp"
                  value={this.props._email}
                  placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={this.props._password}
                  onChange={this.props.onPasswordSignUpChangeAction}
                  placeholder="Password" />
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
  user: state.auth.user,
  _email: state.signUpAuth._email,
  _password: state.signUpAuth._password

})

const mapDispatchToProps = (dispatch) => ({
  signUp: (user) => dispatch(signUp(user)),
  onEmailSignUpChangeAction: (event) => dispatch(onEmailSignUpChangeAction(event.target.value)),
  onPasswordSignUpChangeAction: (event) => dispatch(onPasswordSignUpChangeAction(event.target.value)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));