import React, { Component } from "react";
export default class Total extends Component {
    
  render() {
    const { value } = this.props;
    return <div className="total">
        <p>{value}</p> </div>;
  }
}