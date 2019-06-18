import React, { Component } from "react";
import Gift from './Gift';

class UserCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifts: null,
      showMore: false
    }
    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    fetch(`http://localhost:3000/giftlist/${this.props.userObj.username}`)
      .then((res) => res.json())
      .then((gifts) => {
        this.setState({ gifts: gifts, showMore: true });
        console.log('STATEEE: ', this.state);
      })
  }

  render() {
    console.log(this.props.userObj);
    let display = <div></div>
    if (this.state.showMore) {
      const giftArr = [];
      this.state.gifts.forEach((giftObj) => {
        if (!giftObj.completed)
        giftArr.push(<Gift name={giftObj.gift} username={this.props.userObj.username}/>)
      })
      display =
      <div>
        <div>Interests: {this.props.userObj.interests}</div>
        <div>Notes: {this.props.userObj.notes}</div>
        <div>Wish List</div>
        {giftArr}
      </div>
    }
    return(
      <div className="user-cards">
        <span>{this.props.userObj.username}</span><br></br>
        <span>{this.props.userObj.name}</span><br />
        {display}
        <button onClick={() => this.showMore()}>Show More</button>
      </div>
    )
  }
}




export default UserCards;
