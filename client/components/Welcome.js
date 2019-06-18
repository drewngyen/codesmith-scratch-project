import React, { Component } from "react";
import MainButton from './MainButton'
import fetch from "isomorphic-fetch";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dependents: null
    };
  }

  render() {
    return (
      <div className={'Welcome'}>
        Welcome to Charizard's Happy Place
        
      </div>
    );
  }
}

export default Welcome;
