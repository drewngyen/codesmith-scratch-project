import React, { Component } from "react";
import fetch from "isomorphic-fetch";

class Dependencies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dependents: null
    };
  }

  componentDidMount() {
    fetch("/dependencies")
      .then(response => response.json())
      .then(dependents => this.setState({ dependents }));
  }

  render() {
    return (
      <div>
        <ul>"dependencies": </ul>
        <li> express</li>
        <li>react</li>
        <li>react-dom</li>
        <li>webpack</li>

        <ul>devDependencies</ul>
        <li>@babel/core</li>
        <li>@babel/preset-env</li>
        <li>@babel/preset-react</li>
        <li>babel-loader</li>
        <li>isomorphic-fetch</li>
        <li>webpack-cli</li>
        <li>webpack-dev-server</li>
        <li>css-loader</li>
        <li>style-loader</li>
      </div>
    );
  }
}

export default Dependencies;
