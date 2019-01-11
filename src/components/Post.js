import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter} from "react-router-dom";
import {fire} from '../firebaseConfig';
import TextField from '@material-ui/core/TextField';
import {createPost} from '../actions/';

class Post extends Component {

    constructor(props){
        super(props);

        this.state = {
            description: '',
            username: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount(){
      
        const collection = fire.collection('users');
        collection.get().then(snapshot => {     
            snapshot.forEach(doc => { 
                this.setState({
                    username: doc.data().username,
                })        
            
            });
           
        });
       
    }

    handleChange = (e) => {
        e.preventDefault();

        this.setState({
           [e.target.name]: e.target.value
        })



    }

    handleSubmit = (e) => {
        e.preventDefault();
        let description = this.state.description
        let username = this.state.username
        const post = {
            description,
            username
        }
        
        this.props.createPost(post)
        this.props.history.push('/dashboard')

    }

    render(){
        const {userId} = this.props
        if (!userId) return <Redirect to='/' />
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
                            name="description"
                            style = {{width: 700}} 
                            defaultValue=""
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                        
                        />
                        <br />
                    
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
    userId: state.auths.userId,
    user: state.auths.user
})

const mapDispatchToProps = (dispatch) => ({
    createPost: (post) => dispatch(createPost(post))

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));