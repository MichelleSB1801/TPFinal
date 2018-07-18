import React, { Component } from 'react';
import './buscador.css';
import a from '../../img/ic_Search.png'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
             <img src={a} />
          </div>
					</Link>
        </div>
      );
    }
  }
  export default Buscador;