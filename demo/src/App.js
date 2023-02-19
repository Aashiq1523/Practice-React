import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Button from './Button/Button';
// import Header from './Header/Header';
import LeftSidePanel from './LeftSidePanel/LeftSidePanel'
import RightSidePanel from './RightSidePanel/RightSidePanel'

const App = () => {

  return (
    <div className="App">
      <LeftSidePanel/>
      <RightSidePanel/>
      {/* <Button name = "Hello"/> */}
      {/* <Header/>      */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
