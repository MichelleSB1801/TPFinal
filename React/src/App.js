import React, { Component } from 'react';
import './App.css';
import Buscador from './components/buscador/buscador'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Buscador />
      </div>
    );
  }
}

export default App;
