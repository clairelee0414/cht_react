import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Dashboard1 from "./components/Dashboard1";
import Dashboard2 from "./components/Dashboard2";
import Person from "./components/Person";
import Pet from "./components/Pet";
import Counter from "./components/Counter";
import Banner from "./components/Banner";

class App extends Component {
  titleChangeListener = (event) => {
    this.setState({ title: event.target.value });
  };
  state = {
    persons: [
      { name: "Hao", age: 43 },
      { name: "Tim", age: 33 },
      { name: "Claire", age: 40 },
    ],
    title: "Hello React chtti302",
    showPersons: false,
  };

  changeNameHandler = (leaderName) => {
    console.log("change button clicked");
    this.setState({
      persons: [
        { name: leaderName, age: 45 },
        { name: "Caption America", age: 35 },
        { name: "Thor", age: 200 },
      ],
    });
  };

  toggleDisplayHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  render() {
    const style = {
      backgroud: "yellow",
      font: "inherit",
      border: "2px solid red",
      padding: "4 px",
      cursoe: "pointer",
    };

    return (
      <div className="App">
        <Counter step="2" />
        <h1>{this.state.title}</h1>
        <Banner
          clickCallback={this.titleChangeListener}
          name={this.state.title}
        />
        <Dashboard1 />
        <Dashboard2 />
        <button style={style} onClick={() => this.toggleDisplayHandler()}>
          show/hide persons
        </button>
        <button
          style={style}
          onClick={() => this.changeNameHandler("one punch man")}
        >
          change
        </button>
        {this.state.showPersons === true ? (
          <div>
            <Person
              clickCallback={this.changeNameHandler.bind(this, "Peter")}
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
        ) : null}
      </div>
    );
  }
}

export default App;
