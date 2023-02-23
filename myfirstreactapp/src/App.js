import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = () => {

  // state
  const [person, setPerson] = useState({
    persons: [
      { name: 'Aashiq', age: '26'},
      { name: 'Soffi', age: '23'}
    ]
  });

  const [showPerson, setShowPerson] = useState(false);

  // manipulating state
  // const expandNameHandler = () => {
  //   setPerson({
  //     persons: [
  //       { name: 'Mohamed Aashiq', age: '26'},
  //       { name: 'Soffi Ashraf', age: '23'}
  //     ]
  //   });
  // };

  // Two-way binding
  const nameChangeHandler = (event) => {
    setPerson({
      persons: [
        { name: event.target.value, age: '26'},
        { name: 'Soffi Ashraf', age: '23'}
      ]
    });
  };

  const togglePersonHandler = () => {
    setShowPerson(!showPerson);
  };

  // Inline style
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'ponter',
    margin: '8px'
  }

  return (
    <div className="App">
      <h1>Hello, This is using JSX</h1>

      {/* Rendering Content Conditionally */
        showPerson ?
        <div>
          <Person
            name={person.persons[0].name}
            age={person.persons[0].age}
            change={nameChangeHandler}
            />
          <Person 
            name={person.persons[1].name}
            age={person.persons[1].age}>
              I am an Optom
          </Person>
        </div> : null
      }
      <button style={style} onClick={togglePersonHandler}>Show Persons</button>
    </div>
  );
}

export default App;