import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Premis from './components/Premis';
import NewPremis from './components/NewPremis';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello world
        < Premis />
        < NewPremis />
      </div>
    );
  }
}

export default App;
