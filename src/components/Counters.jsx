import React, { Component } from "react";
import Counter from "../components/Counter";
import Total from "./Total";
// import Total from "./Total";

export default class Counters extends Component {
  state = {
    counters: [
      { id: 1, count: 0, steps: 1 },
      { id: 2, count: 0, steps: 2 },
      { id: 3, count: 0, steps: 3 },
      { id: 4, count: 0, steps: 4 },
    ],
  };

  onIncrement = (counter) => {
    const counters = [...this.state.counters];
    const counterIndex = counters.indexOf(counter);
    counters[counterIndex] = { ...counter };
    counters[counterIndex].count = counters[counterIndex].count + counters[counterIndex].steps;
    this.setState({ counters });
  };

  onDecrement = (counter) => {
    const counters = [...this.state.counters];
    const counterIndex = counters.indexOf(counter);
    counters[counterIndex] = { ...counter };
    if (counters[counterIndex].count > 0) {
      counters[counterIndex].count = counters[counterIndex].count - counters[counterIndex].steps;
      this.setState({ counters });
    }
  };
  calcTotal = () => {
    return this.state.counters.reduce(function (acc, obj) {
      return acc + obj.count;
    }, 0);
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.onIncrement}
            onDecrement={this.onDecrement}
          />
        ))}
        <Total value={this.calcTotal()} />
      </div>
    );
  }
}
