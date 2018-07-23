import React, { Component } from 'react';
import './buscador.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom"


import icon from '../../img/ic_Search.png'

class Buscador extends Component {
    constructor(props){
			super(props)
			this.state = {
				textValue: '',
        //redirect: false,
      }
    }
  
    componentDidUpdate() {
      if (this.state.redirect) {
        this.setState({
          redirect:false,
        })
      }
    }
		handleChange(e) {
			const value = e.target.value

			this.setState({
				textValue: value
			})
    }
    
    handleKeyPress(e){
      if(e.key==='Enter'){
        console.log('funciona')
        this.setState({
          redirect:true,
        })
      }
    }


    render() {
      const url = "/items?search=" + this.state.textValue
      const home = '/'
      return ( 
        <div className = "searchBar">
          <Link to={home}>
            <div className = 'logoBar'>
              <div>M</div>
            </div>
          </Link>  
          <div className='inputBar'>
            <input 
              onChange={this.handleChange.bind(this)} 
              onKeyPress={this.handleKeyPress.bind(this)} 
              type='text' placeholder="Nunca dejes de buscar" 
            />
          </div>
          {this.state.redirect == true &&
            <Redirect to={url}>
            </Redirect>
          }
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