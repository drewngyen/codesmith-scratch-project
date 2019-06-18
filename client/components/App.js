import React, { Component } from "react";
import FormPage from "./FormPage";
import Welcome from "./Welcome";
import UserCards from "./UserCards";
import Search from "./Search";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div className="navbar">
          <Link to="/"><i class="fas fa-home"></i></Link> 
          <Link to="/addgift"><i class="fas fa-gift"></i></Link>
          {
            // below is temp
            // "/" home
            // "/addgift" adds gift
            // "/Search" search
          }
          <Link to="/Search"><i class="fas fa-search"></i></Link>
        </div>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/addgift" component={FormPage} />
        {
          // below is temp
        }
        <Route exact path="/Search" component={Search} />
      </Router>
    );
  }
}
export default App;
