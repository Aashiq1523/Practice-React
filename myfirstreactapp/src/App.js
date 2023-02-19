import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello, This is using JSX</h1>
    </div>
    //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello, This is using React element calls'))
  );
}

export default App;
