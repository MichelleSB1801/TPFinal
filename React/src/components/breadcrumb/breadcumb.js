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

    if(this.props.search){
      const qs = queryString.parse(this.props.search)
      const itemsearch = 'items?q=' + qs.search

      
      const cats = await fetch('http://localhost:3001/api/' + itemsearch)
      const catsjson = await cats.json()
      
      this.setState({
        categories: catsjson.categories
      })    
    }else{
      const id = this.props.info.category_id
      const catsearch = 'categories/' + id

      const cats = await fetch('http://localhost:3001/api/' + catsearch)
      const catsjson = await cats.json()
  
      this.setState({
        categories: catsjson[0]
      })      
    }

  }
  
  render() {
		let producto = this.state.categories
    return ( 
			<div className = "breadcrumb">
			  {producto	&&
				  <React.Fragment>
					  {this.state.categories.map((info,i) => {
						  return (
							  <ul key={i} >
                  <li>{info}</li>
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
