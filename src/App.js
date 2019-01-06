import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { CurrentUser } from "./actions";
import { connect } from "react-redux";


class App extends Component {
    componentWillMount() {
        this.props.CurrentUser();
    }
  render(){
      return(
          <Navbar />
      )
  }

}


export default connect(null, { CurrentUser })(App);


