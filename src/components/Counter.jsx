import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <div className="value">{this.props.counter.count}</div>

        <button
          className="decrement"
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          -
        </button>
        <button
          className="increment"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          +
        </button>
      </div>
    );
  }
}

// another solution
// import React, { Component } from "react";
// import "./style.css";
// export default class Counter extends Component {
//   render() {
//     const { value, onIncrement, onDecrement } = this.props;

//     return (
//       <div className="counter">
//         <div className="value">{value}</div>
//         <p>
//           <button className="decrement" onClick={() => onDecrement(2)}>
//             -
//           </button>
//         </p>
//         <p>
//           <button className="increment" onClick={() => onIncrement(2)}>
//             +
//           </button>
//         </p>
//       </div>
//     );
//   }
// }
