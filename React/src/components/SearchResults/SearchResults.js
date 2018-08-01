import React, { Component } from 'react';
import ListaItems from '../listaItems/listaItems'
import Buscador from '../buscador/buscador'
import Breadcrumb from '../breadcrumb/breadcumb'

import './SearchResults.css';

const queryString = require('query-string');


class SearchResults extends Component {
  constructor(props) {
      super(props)
      this.state = {
        products: [],
        categories: []
    }
  }

  async componentDidMount () {


    const qs = queryString.parse(this.props.location.search)
    const itemsearch = 'items?q=' + qs.search


		const products = await fetch('http://localhost:3001/api/' + itemsearch)
    const productsjson = await products.json()
    this.setState({
      products: productsjson.items,
      categories: productsjson.categories
    })    
  }

  async componentDidUpdate (prevProps) {
    const qs = queryString.parse(this.props.location.search)
    console.log(queryString.parse(this.props.location.search))
    if (this.props.location.search !== prevProps.location.search) {

      const products = await fetch('http://localhost:3001/api/items?q=' + qs.search)
      const productsjson = await products.json()
      this.setState({
        products: productsjson.items,
        categories: productsjson.categories
      })
    }
  }

  

  render() {
    
    const products = this.state.products
    const categories = this.state.categories
    return (
      <div className="Search_results">
        <Buscador />
        <Breadcrumb search={categories} />
        <ListaItems search={products} />
      </div>
    );
  }
}

export default SearchResults;
