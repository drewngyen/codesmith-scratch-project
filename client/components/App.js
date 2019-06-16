import React, { Component } from 'react';
import FormPage from './FormPage';
import Welcome from './Welcome';
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
        </div>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/addgift" component={FormPage} />
      </Router>
    );
  }
}
export default App;
