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
    console.log('looking at api/users/gil')
      fetch('http://localhost:3000/api/user/gil')
      // Transform the data into json
      .then(response => {
        
        return response.json();
    })
    .then(function(data) {
        console.log('this is the data', data)
        
        
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