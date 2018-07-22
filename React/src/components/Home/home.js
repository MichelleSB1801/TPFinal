import React, { Component } from 'react';
import Buscador from '../buscador/buscador'

import './home.css';


class Home extends Component {
    constructor(props) {
        super(props)

    }

  render() {
    return (
      <div className='home'>
        <Buscador />	
      </div>
    );
  }
}

export default Home;
