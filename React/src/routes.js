import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Buscador from "./components/buscador/buscador"
import SearchResults from "./components/SearchResults/SearchResults"


import './App.css';

class Routes extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Buscador} />
          <Route exact path="/items" component={SearchResults} />
          {/*<Route path="/checkout" component={ListaItems} />
          <Route exact path="/" component={Home} />*/}
        </div>
      </Router>
    );
  }
}

export default Routes;