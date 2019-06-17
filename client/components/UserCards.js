import React, { Component } from "react";

class UserCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      
    }
  }

  componentDidMount(){
   

 }

  render(){
    return(
      <div>
      <span>{this.props.userObj.username}</span> <br></br>
      <span>{this.props.userObj.name}</span>
      </div>
    )
  }
}




export default UserCards;