import React, { Component } from 'react';
import './SearchResults.css';
import SearchResults from './components/SearchResults/SearchResults'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchResults />
      </div>
    );
  }
}

export default App;
