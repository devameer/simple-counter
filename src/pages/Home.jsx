import React, { Component } from "react";
import Counter from "../components/Counter";
import Total from "../components/Total";

export default class Home extends Component {
  state = {
    value: 0,
  };

  handleValue = (childVal) => {
    this.setState((prevState) => ({
      value: prevState.value + childVal,
    }));
  };

  render() {
    return (
      <div>
        <Counter handleValue={(childVal) => this.handleValue(childVal)} step={5} />
        <Counter handleValue={(childVal) => this.handleValue(childVal)} step={3} />
        <Counter handleValue={(childVal) => this.handleValue(childVal)} step={2} />
        {/* <Counter step={1} /> */}
        <Total value={this.state.value} />
      </div>
    );
  }
}
