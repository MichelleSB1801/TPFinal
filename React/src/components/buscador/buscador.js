import React, { Component } from 'react';
import './buscador.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import icon from '../../img/ic_Search.png'

class Buscador extends Component {
    constructor(props){
			super(props)
			this.state = {
				textValue: ''
			}
    }
	
		handleChange(e) {
			const value = e.target.value

			this.setState({
				textValue: value
			})
		}
    render() {
			const url = "/items?search=" + this.state.textValue
      return ( 
        <div className = "searchBar">
          <div className = 'logoBar'>
            <div>M</div>
          </div>
          <div className='inputBar'>
            <input onChange={this.handleChange.bind(this)} type='text' placeholder="Nunca dejes de buscar" />
          </div>
					<Link to={url}>
            <div className='buttonBar'>
              <img src={icon} />
            </div>
					</Link>
        </div>
      );
    }
  }
  export default Buscador;