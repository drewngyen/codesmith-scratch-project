import React, { Component } from "react";

class UserCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'tempUser',
      gifts: ['arr', 'of', 'gifts']
      
    }
  }

  componentDidMount(){
      fetch('api/users')
      .then((resp) => resp.json()) // Transform the data into json
      .then(function(data) {
        console.log(data)
      
  })
 }

  render(){
    return(
      <div>
        <p>hold up</p>
      <span>{this.state.user}</span>
      </div>
    )
  }
}

export default UserCards;