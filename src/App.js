import React, { Component } from 'react';
import soccer from './img/soccer.svg';
import Navbar from './component/navbar';
import Results from './component/pages/results';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={soccer} className="App-logo" alt="logo" />
          <h1 className="App-title">World Cup</h1>
        </header>
        <Navbar/>
        <Results/>
      </div>
    );
  }
}

export default App;
