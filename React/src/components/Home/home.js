import React, { Component } from 'react';
import Buscador from '../buscador/buscador'

import './home.css';
import lupa from '../../img/magnifying-glass.png'


class Home extends Component {
    constructor(props) {
        super(props)

    }

  render() {
    return (
      <div className='home'>
        <Buscador />
        <div className='welcome'>
          <img src = {lupa} />
          <h1>Nunca dejes de buscar</h1>
        </div>
      </div>
    );
  }
}

export default Home;
