import React, { Component } from 'react';
import './breadcrumb.css';

const queryString = require('query-string');

class Breadcrumb extends Component {
  constructor(props){
    super(props)
    this.state = {
        categories: [],
    }

  }
 
  async componentDidMount () {
    const qs = queryString.parse(this.props.search)

    
		const cats = await fetch('http://localhost:3001/api/items?q=' + qs.search)
		const catsjson = await cats.json()
		
		this.setState({
      categories: catsjson.categories
		})    
		
		console.log('didmount', this.state.categories)

  }
  
  render() {
		let producto = this.state.categories
    return ( 
			<div className = "breadcrumb">
			  {producto	&&
				  <React.Fragment>
					  {this.state.categories.map((info,i) => {
						  console.log(info)
						  return (
							  <ul>
                  <li key={i}>{info}</li>
                  <li className='separador'> > </li>
                </ul>
              )
					  })}
				  </React.Fragment>
        }
      </div>
    );
  }
}

export default Breadcrumb;
