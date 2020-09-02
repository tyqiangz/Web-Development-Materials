import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    users: [
      {name: "Alpha"},
      {name: "Beta"},
      {name: "Caroline"}
    ]
  }

  switchNameHandler = () => {
    this.setState( {
      users: [
        { name: 'TYQ', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  /* nameChangedHandler = () => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: 'TYQ', age: 25 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }
  */

  render() {
    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <hr></hr>
        <div>
          <p>Some testing output :)</p>
          <UserOutput name={this.state.users[0].name}>Output 1</UserOutput>
          <UserOutput name={this.state.users[1].name}>Output 2</UserOutput>
          <UserOutput name={this.state.users[2].name}>Output 3</UserOutput>
          <button onClick={() => this.switchNameHandler()}>Update names</button>
        </div>
      </div>
    );
  }
}

export default App;
