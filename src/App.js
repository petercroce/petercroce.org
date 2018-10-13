import React, { Component } from 'react';
import pSign from './p-sign.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={pSign} id="p-sign" alt="The letter P in Peter's handwriting" />
        </header>
      </div>
    );
  }
}

export default App;
