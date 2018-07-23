import React, { Component } from 'react';
import ListaItems from '../listaItems/listaItems'
import Buscador from '../buscador/buscador'
import Breadcrumb from '../breadcrumb/breadcumb'

import './SearchResults.css';



class SearchResults extends Component {
  constructor(props) {
      super(props)

  }



  

  render() {
    
      const data = this.props.location.search
      
    return (
      <div className="Search_results">
        <Buscador />
        <Breadcrumb search={data} />
        <ListaItems search={data} />
      </div>
    );
  }
}

export default SearchResults;
