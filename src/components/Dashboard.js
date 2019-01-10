import React, {Component} from 'react';
import { CurrentUser } from "../actions/";
import {fire} from '../firebaseConfig';
import { connect} from "react-redux";
import  '../index.css';
import {withRouter, Redirect} from "react-router-dom";
class Dashboard extends Component{

    constructor(props){
        super(props)

        this.state = {
            username:"",
            loading: true
        }

    }

    componentDidMount(){
        if(this.props.userId){
            const collection = fire.collection('users');
            collection.get().then(snapshot => {     
              snapshot.forEach(doc => { 
                this.setState({
                    username: doc.data().username,
                    loading:false
                })        
            
              });
            
            });
        }


    }

    render(){
        if (!this.props.userId) return <Redirect to='/' />
        const { loading } = this.state;

        if(loading){
           return(
            <div className="loader"></div>
           ) 
        }
        return(
            <div className="container"> 
                <div className="row">
                    <div className="col-md-6">
                        <h1>Welcome {this.state.username}</h1>
                    </div>
                </div>
            </div>
          

        );
    }


}

const mapStateToProps = (state) => ({
    user: state.auths.user,
    userId: state.auths.userId
})
  

export default withRouter(connect(mapStateToProps, null)(Dashboard));
