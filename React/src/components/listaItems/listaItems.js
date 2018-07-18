import React, { Component } from 'react';
import './listaItems.css';
import Item from '../Item/item'

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

    console.log(2323, qs.search)
		const products = await fetch('http://localhost:3001/api/items?q=' + qs.search)
		const productsjson = await products.json()
    this.setState({
      products: productsjson
    })
    console.log(this.state.products.items)

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
