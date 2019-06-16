import React, { Component } from "react";
import MainButton from './MainButton';

import fetch from "isomorphic-fetch";

class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'First Name': '',
      'Last Name': '',
      'Favorite Color': 'blue'

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
       First Name: <input id={'fNameInput'} defaultValue={`Hugh`}></input> <br></br>
       Last Name: <input id={'lNameInput'} defaultValue={`Mungous`}></input> <br></br>
       Favorite Color:  <input id={'favColor'} defaultValue={`black`}></input> <br></br>
       Likes:  <input id={'likesList'} defaultValue={`Chernobyl`}></input> <MainButton text={'Add Like'} /> <br></br>
       Dislikes:  <input id={'dislikesList'} defaultValue={`not Chernobyl`}></input> <MainButton text={'Add Dislikes'} />  <br></br>
       Notes: <input id={'notes'} defaultChecked={`travel prices to Northern Ukraine`}></input> <br></br>
       <MainButton text={'Submit All'} />

      </div>
    );
  }
}

export default FormPage;
