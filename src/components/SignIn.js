import React, { Component } from 'react';

class SignIn extends Component{
    
    render(){
        return(
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>Sign In</h1>
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input
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

export default SignIn;