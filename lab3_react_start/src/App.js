import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Dashboard1 from "./components/Dashboard1";
import Dashboard2 from "./components/Dashboard2";
import Person from "./components/Person";
import Pet from "./components/Pet";
import Counter from "./components/Counter";

class App extends Component {
  state = {
    persons: [
      { name: "Hao", age: 43 },
      { name: "Tim", age: 33 },
      { name: "Claire", age: 40 },
    ],
  };

  changeNameHandler = () => {
    console.log("change button clicked");
    this.setState({
      persons: [
        { name: "super man", age: 45 },
        { name: "Caption America", age: 35 },
        { name: "Thor", age: 200 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <Counter step="2" />
        {
          // can
        }
        <Dashboard1 />
        <Dashboard2 />
        <button onClick={this.changeNameHandler}>change</button>
        <Person
          clickCallback={this.changeNameHandler}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Pet name="king" species="cat" />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          Team leader
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
        <Pet />
      </div>
    );
  }
}

export default App;
