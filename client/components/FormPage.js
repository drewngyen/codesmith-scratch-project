import React, { Component } from "react";
import MainButton from "./MainButton";

import fetch from "isomorphic-fetch";

class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      firstName: null,
      lastName: null,
      wishList: [],
      notes: "",
      interests: ""
    };
    this.submitToServer = this.submitToServer.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.setFirstname = this.setFirstname.bind(this);
    this.setLastname = this.setLastname.bind(this);
  }

  submitToServer(e) {
    console.log("in submit to server");
    fetch("http://localhost:3000/api/create/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    });
    fetch();
  }

  setUsername(e) {
    this.setState({ username: e.target.value });
  }
  setFirstname(e) {
    this.setState({ firstName: e.target.value });
  }
  setLastname(e) {
    this.setState({ lastName: e.target.value });
  }
  setInterests(e) {
    this.setState({ interests: e.target.value });
  }
  setNotes(e) {
    this.setState({ notes: e.target.value });
  }
  setWishList(e) {
    const input = e.target.value;
    if (input[input.length - 1] === ",") {
      const gifts = e.target.value.split(",");
      console.log("gifts:");
      console.log(gifts);
      const lastItem = gifts[gifts.length - 2].trim();
      console.log("lastItem:");
      console.log(lastItem);
      const toAdd = { [lastItem]: false };
      // gifts.forEach((gift) => {
      //   const trimmed = gift.trim();
      //   newWishList.push({ [trimmed]: false });
      //   this.setState({ wishList: [...this.state.wishList].concat(newWishList) });
      // });
      this.setState({ wishList: [...this.state.wishList, toAdd] });
    }
  }

  render() {
    console.log("this.state.wishList:");
    console.log(this.state.wishList);
    return (
      <div className="form-page">
        Username:{" "}
        <input
          id={"username"}
          defaultValue={`Hugh`}
          onChange={e => {
            this.setUsername(e);
          }}
        />{" "}
        <br />
        First Name:{" "}
        <input
          id={"firstName"}
          defaultValue={`Hugh`}
          onChange={e => {
            this.setFirstname(e);
          }}
        />{" "}
        <br />
        Last Name:{" "}
        <input
          id={"lastName"}
          defaultValue={`Mungous`}
          onChange={e => {
            this.setLastname(e);
          }}
        />{" "}
        <br />
        Wish List:{" "}
        <input
          id={"wishList"}
          onChange={e => {
            this.setWishList(e);
          }}
          defaultValue={"Separate by commas!~"}
        />
        <br />
        Interests:{" "}
        <input
          id={"interests"}
          onChange={e => {
            this.setIntersts(e);
          }}
        />
        <br />
        Notes:{" "}
        <input
          id={"notes"}
          onChange={e => {
            this.setNotes(e);
          }}
        />{" "}
        <br />
        <button id="submitButton" onClick={e => this.submitToServer(e)}>Submit</button>
      </div>
    );
  }
}

export default FormPage;
