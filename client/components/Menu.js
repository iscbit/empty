import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Szia Tibi!</h1>
        <Link to="/test">TestLink</Link>
      </div>
    );
  }
}
export default Menu;
