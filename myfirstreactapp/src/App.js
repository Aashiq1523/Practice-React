import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = () => {

  // state
  const [personArray, setPersonArray] = useState([
      { id: 1, name: 'Aashiq', age: '26'},
      { id: 2, name: 'Soffi', age: '23'}
    ]);

  const [showPerson, setShowPerson] = useState(false);

  const togglePersonHandler = () => {
    setShowPerson(!showPerson);
  };

  const deletePersonHandler = (index) => {
    const persons = [...personArray];
    persons.splice(index, 1);
    setPersonArray(persons);
  }

  // Inline style
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'ponter',
    margin: '8px'
  }

  // preferred way for conditional rendering
  let persons = null

  if (showPerson) {
    persons = (
      <div>
        {personArray.map((person, index) => {
          return (
            <Person
              name={person.name}
              age={person.age}
              click={deletePersonHandler.bind(this, index)}
              key={person.id}
            />
          )
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hello, This is using JSX</h1>
      {persons}
      <button style={style} onClick={togglePersonHandler}>Show Persons</button>
    </div>
  );
}

export default App;