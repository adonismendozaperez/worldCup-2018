import React, { Component } from 'react';
import soccer from '../img/soccer.svg';
import '../App.css';

class Navbar extends Component {
  render() {
    return (
      <div  className="App">
            <header className="App-header">
                <img src={soccer} className="App-logo" alt="logo" />
                <h1 className="App-title">World Cup</h1>
            </header>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="/">Results</a>
                    <a className="nav-item nav-link" href="/page">Today's matches</a>
                </div>
                </div>
            </nav>
        
      </div>
    );
  }
}

export default Navbar;