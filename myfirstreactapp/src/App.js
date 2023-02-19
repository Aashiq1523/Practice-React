import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  // state
  state = {
    persons: [
      { name: 'Aashiq', age: '26'},
      { name: 'Soffi', age: '23'}
    ]
  };

  // manipulating state
  expandNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Mohamed Aashiq', age: '26'},
        { name: 'Soffi Ashraf', age: '23'}
      ]
    });
  }

  render() {

    return (
      <div className="App">
        <h1>Hello, This is using JSX</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I am an Optom</Person>
        <button onClick={this.expandNameHandler}>ExpandName</button>
      </div>
    );
  }
}

export default App;