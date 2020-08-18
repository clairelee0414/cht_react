import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg:"counter=",
      count: 0,
    };
  }
  clickHandler = () => {
    // const nextValue = this.state.count + 1;
    // this.setState({ count: nextValue }, () => {
    //     console.log(`${this.state.count}`)
    // });
    this.setState(
      (prevState, props) => ({ count: prevState.count + parseInt(props.step) }),
      () => {
        console.log(`${this.state.count}`);
      }
    );
    console.log(`button clicked ${this.state.count} times`);
    // this.state.count +=1
  };

  clickHandler10 = () => {
    this.clickHandler();
    this.clickHandler();
    this.clickHandler();
    this.clickHandler();
    this.clickHandler();
    this.clickHandler();
    this.clickHandler();
    this.clickHandler();
    this.clickHandler();
    this.clickHandler();
  };

  render() {
    return (
      <div>
        <h2>{this.msg}={this.state.count}</h2>
        <button onClick={this.clickHandler}>click</button>
        <button onClick={this.clickHandler10}>10x click</button>
      </div>
    );
  }
}
