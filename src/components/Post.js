import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter} from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
class Post extends Component {

    constructor(props){
        super(props);

        this.state = {
            description: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        e.preventDefault();

        this.setState({
            description:{
                [e.target.name] : [e.target.value]
            }
        })



    }

    handleSubmit = (e) => {
        e.preventDefault();



    }

    render(){
        const {userId} = this.props
        if (!this.props.userId) return <Redirect to='/' />
        return(
        <div className="container">
            <div className="row">
                <div className="col-md-8 mt-4">
                    <form onSubmit={this.handleSubmit}>
                        <h2>Create Post</h2>
                        <TextField
                            id="outlined-multiline-static"
                            label="Enter Description"
                            multiline
                            rows="4"
                            style = {{width: 700}} 
                            defaultValue=""
                            margin="normal"
                            variant="outlined"
                            floatingLabelText="Title"
                            onChange={this.handleChange}
                        
                        />
                        <br />
                        {this.state.registerError && (
                        <div className="alert alert-danger" role="alert">
                            <span
                            className="glyphicon glyphicon-exclamation-sign"
                            aria-hidden="true"
                            />
                            <span className="sr-only">Error:</span>
                            &nbsp;{this.state.registerError}
                        </div>
                        )}
                        <br></br>
                        <Button variant="contained" color="primary">
                            Submit
                        </Button>
                    </form> 
                </div>
            </div>
        </div>
     

        );
    }

}


const mapStateToProps = (state) => ({
    userId: state.auths.userId
})



export default withRouter(connect(mapStateToProps, null)(Post));