import React, { Component } from 'react';
import FormPage from './FormPage';
import Welcome from './Welcome';
import UserCards from './UserCards';
import Search from './Search';

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
          <Link to="/Search">    Searching stuff</Link>
        </div>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/addgift" component={FormPage} />
        {// below is temp
          }
        <Route exact path="/Search" component={Search} />
      </Router>
    );
  }
}
export default App;
