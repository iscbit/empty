import React, { Component } from "react";
import Menu from "./Menu";
import TestContainer from "../containers/TestContainer";
import { HashRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Menu} />
          <Route exact path="/test" component={TestContainer} />
        </div>
      </Router>
    );
  }
}
export default App;
