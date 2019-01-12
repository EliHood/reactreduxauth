import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { CurrentUser} from "./actions";
import { connect } from "react-redux";
import  './index.css';

class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            loading:true
        }
    }
    componentWillMount() {
        this.props.CurrentUser();
        
    

        this.setState({
            loading:false
        })
    }
  render(){
      const { loading} = this.state;

      if(loading){
          return(
              <div className="loader"></div>
          )
      }
      return(
          <Navbar />
      )
  }

}


export default connect(null, { CurrentUser})(App);


