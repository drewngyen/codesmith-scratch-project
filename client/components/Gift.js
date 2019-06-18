import React, { Component } from "react";

class Gift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bought: false,
    }
    this.buy = this.buy.bind(this);
  }

  buy() {
    const payload = JSON.stringify({
      'gift': this.props.name,
      'completed': "true"
    });
    console.log('body of put request', payload);
    this.setState({ bought: true });
    console.log('thispropsusername',this.props.username);
    fetch('http://localhost:3000/user/' + this.props.username, {
      method: 'PUT',
      body: payload
    })
      .then((res) => console.log('response from put:', res))
  }

  render() {
    if (!this.state.bought) {
      return (
        <div>
          {this.props.name}
          <button onClick={ () => this.buy() }>Bought</button>
        </div>
      )
    } else return null;
  }
}

export default Gift;
