import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchResults from "./components/SearchResults/SearchResults"
import ProductDetail from "./components/ProductDetail/productDetail"
import Home from './components/Home/home';


import './App.css';

class Routes extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/items" component={SearchResults} />
          <Route path="/items/:id" component={ProductDetail} />
        </div>
      </Router>
    );
  }
}

export default Routes;