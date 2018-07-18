import React, { Component } from 'react';
import ListaItems from '../listaItems/listaItems'
import Buscador from '../buscador/buscador'

class SearchResults extends Component {
    constructor(props) {
        super(props)

    }

  render() {
      console.log(123)
      console.log(this.props)
      const data = this.props.location.search
      console.log(data)
    return (
      <div className="App">
        <Buscador />
        <ListaItems search={data} />
      </div>
    );
  }
}

export default SearchResults;
