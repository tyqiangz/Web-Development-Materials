import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 28},
      {name: "Manu", age: 29},
      {name: "Stephanie", age: 26}
    ]
  }

  switchNameHandler = (newName) => {
    //console.log("Was clicked!");
    this.setState( {
      persons: [
        {name: newName, age: 38},
        {name: "Beta", age: 39},
        {name: "Carol", age: 36}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        {name: "Alpha", age: 38},
        {name: event.target.value, age: 39},
        {name: "Carol", age: 36}
      ]
    })
  }

  render() {
    return (
      <div className="App">
       <h1>Hi, here's some data</h1>
       <p>This is really working!</p>
       <button onClick={() => this.switchNameHandler('Holy Moly!')}>Switch name</button>
       <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
       <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        changed={this.nameChangedHandler}>Hello!</Person>
       <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
