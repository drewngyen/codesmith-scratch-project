import React, { Component } from 'react';
import FormPage from './FormPage';
import Welcome from './Welcome';
import UserCards from './UserCards';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class App extends Component {
  constructor(props) {
      super(props);
  }
  render() {
    return (
      <Router>
        <div className='navbar'>
          <Link to="/">Home</Link>
          <Link to="/addgift">Add a Gifff</Link>
          {// below is temp
          }
          <Link to="/tempCard">see Card?</Link>
        </div>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/addgift" component={FormPage} />
        {// below is temp
          }
        <Route exact path="/tempCard" component={UserCards} />
      </Router>
    );
  }
}
export default App;
