import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Dashboard1 from './components/Dashboard1';
import Dashboard2 from './components/Dashboard2';
import Person from './components/Person';
import Pet from './components/Pet';

function App() {
  return (
    <div className="App">
    <Dashboard1/>
    <Dashboard2/>
    <Person name = "Hao" age = "43"/>
    <Pet name = "king" species="cat"/>
    <Person name = "Tim" age = "33">Team leader</Person>
    <Person name = "Claire" age = "40"/>
    <Pet/>
    </div>
  );
}

export default App;
