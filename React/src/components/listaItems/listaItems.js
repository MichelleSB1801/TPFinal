import React, { Component } from 'react';
import Item from '../Item/item'



import './listaItems.css';


const queryString = require('query-string');

class ListaItems extends Component {
  constructor(props){
    super(props)
    this.state = {
        products: [],
    }

  }
 
  async componentDidMount () {
    const qs = queryString.parse(this.props.search)

    console.log('didmount', qs.search)
		const products = await fetch('http://localhost:3001/api/items?q=' + qs.search)
		const productsjson = await products.json()
    this.setState({
      products: productsjson
    })    
  }

  async componentDidUpdate (prevProps) {
      
    const qs = queryString.parse(this.props.search)

    if (this.props.search !== prevProps.search) {
      console.log('update', qs.search)
      const products = await fetch('http://localhost:3001/api/items?q=' + qs.search)
      const productsjson = await products.json()
      this.setState({
        products: productsjson
      })
      console.log(productsjson);
    }
  }
  
  render() {
		let producto = this.state.products && this.state.products.items
    return ( 
			<div className = "list_container">
			{producto	&&
				<React.Fragment>
					{this.state.products.items.map((info,i) => {
						console.log(info)
						return (
							<Item key={i} item={info} />
						)
					})}
				</React.Fragment>
			}		
      </div>
    );
  }
}

export default ListaItems;
