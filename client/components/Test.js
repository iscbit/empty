import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { testValue: "" };
  }
  typing(e) {
    this.setState({ testValue: e.target.value });
  }
  render() {
    return (
      <div>
        <h1>Hey, a szöveg: {this.props.test}</h1>
        <input
          type="text"
          value={this.state.testValue}
          onChange={e => this.typing(e)}
        />
        <hr />
        <button
          className="btn btn-primary"
          onClick={_ => this.props.doMagic(this.state.testValue)}
        >
          Állíts be!
        </button>
      </div>
    );
  }
}
export default Test;
