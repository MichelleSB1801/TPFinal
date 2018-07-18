import React, { Component } from 'react';
import Buscador from '../buscador/buscador'



class Home extends Component {
    constructor(props) {
        super(props)

    }

  render() {
    return (
      <div>
        <Buscador />
      </div>
    );
  }
}

export default Home;
