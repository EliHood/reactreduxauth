import React, {Component} from 'react';
import { CurrentUser } from "../actions/";
import {fire} from '../firebaseConfig';
import { connect} from "react-redux";
import {withRouter, Redirect} from "react-router-dom";
class Dashboard extends Component{

    constructor(props){
        super(props)

        this.state = {
            username:""
        }

    }

  

    componentDidMount(){
        if(this.props.userId){
            const collection = fire.collection('users');
            collection.get().then(snapshot => {     
              snapshot.forEach(doc => { 
                console.log( doc.data().username);  
                this.setState({
                    username: doc.data().username
                })        
            
              });
            
            });
        }


    }

    render(){
        if (!this.props.userId) return <Redirect to='/' />
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
