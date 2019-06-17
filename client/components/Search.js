import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: [],
      users: Object
    }
    this.clickClack = this.clickClack.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  clickClack(e){
      console.log(this.state.inputVal)
    fetch(`http://localhost:3000/api/user/${this.state.inputVal}`)
    // Transform the data into json
    .then(response => {
      return response.json();
    })
    .then((users) => this.setState({ users})
    )
    .catch( err => console.log(err));
  }

  handleChange(e){
    this.setState({ inputVal: e.target.value });
  }

  componentDidUpdate(){
 
 }

  render(){
    console.log('checking state in render', (this.state));
    return(
      <div>
        <input onChange={(e) => this.handleChange(e)} placeholder={'Username'}></input> 
        <button onClick={(e) => this.clickClack(e) }>Search</button>
      </div>
    )
  }
}




export default Search;