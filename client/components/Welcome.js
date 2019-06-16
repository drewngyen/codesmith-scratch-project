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
      <div>
        Welcome to Charizard's Sex Dungeon
      </div>
    );
  }
}

export default Welcome;
