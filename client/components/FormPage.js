import React, { Component } from "react";
import MainButton from './MainButton';

import fetch from "isomorphic-fetch";

class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      firstName: null,
      lastName: null,
      wishList: [],
      notes: [],
      interests: []
    };
    this.submitToServer = this.submitToServer.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.setFirstname = this.setUsername.bind(this);
    this.setLastname = this.setUsername.bind(this);
  }

  submitToServer() {
    fetch('/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state),
    })
  }

  setUsername(e) { this.setState({ username: e.target.value }); }
  setFirstname(e) { this.setState({ firstName: e.target.value }); }
  setLastname(e) { this.setState({ lastName: e.target.value }); }

  render() {
    console.log(this.state);
    return (
      <div>
         Username: <input id={'username'} defaultValue={`Hugh`} onChange={(e) => { this.setUsername(e) }}></input> <br></br>
         First Name: <input id={'firstName'} defaultValue={`Hugh`} onChange={(e) => { this.setFirstname(e) }}></input> <br></br>
         Last Name: <input id={'lastName'} defaultValue={`Mungous`} onChange={(e) => { this.setLastname(e) }}></input> <br></br>
         Favorite Color:  <input id={'favColor'} defaultValue={`black`}></input> <br></br>
         Likes:  <input id={'likesList'} defaultValue={`Chernobyl`}></input> <MainButton text={'Add Like'} /> <br></br>
         Dislikes:  <input id={'dislikesList'} defaultValue={`not Chernobyl`}></input> <MainButton text={'Add Dislikes'} />  <br></br>
         Notes: <input id={'notes'} defaultChecked={`travel prices to Northern Ukraine`}></input> <br></br>
         <MainButton text={'SubmitAll'} onClick={this.submitToServer()} />
      </div>
    );
  }
}

export default FormPage;
