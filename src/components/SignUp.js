import React, { Component } from 'react';
import { withRouter} from "react-router-dom";
import { connect } from "react-redux";
import { signUp, onEmailSignUpChangeAction, onPasswordSignUpChangeAction } from '../actions/';
class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = (e) =>{
    this.setState({
        [e.target.name] : e.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault();

    const email = this.email.value;
    const password = this.password.value;
    const creds = {email, password}
    if(creds){
      this.props.signUp(creds);
    
      this.props.history.push('/');
      // console.log(creds);
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
                  name="email"
                  type="email"          
                  className="form-control"
                  id="email"
                  ref={(input) => this.email = input}
                  aria-describedby="emailHelp"
                  placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  name="password"
                  type="password"
                  ref={(input) => this.password = input}
                  className="form-control"
                  id="password"    
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


})

const mapDispatchToProps = (dispatch) => ({
  signUp: (user) => dispatch(signUp(user))

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));