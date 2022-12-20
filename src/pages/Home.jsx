import React, { Component } from "react";
import Counter from "../components/Counter";
import Total from "../components/Total";

export default class Home extends Component {
  state = {
    value: 0,
  };

  handleValue = (e) => {
    this.setState((prevState) => ({
      value: prevState.value + e,
    }));
  };

  render() {
    return (
      <div>
        <Counter handleValue={(e) => this.handleValue(e)} step={5} />
        <Counter handleValue={(e) => this.handleValue(e)} step={3} />
        <Counter handleValue={(e) => this.handleValue(e)} step={2} />
        {/* <Counter step={1} /> */}
        <Total value={5} />
      </div>
    );
  }
}
