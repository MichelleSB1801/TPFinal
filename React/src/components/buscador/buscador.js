import React, { Component } from 'react';
import './buscador.css';
import Item from '../Item/item'

class Buscador extends Component {
  constructor(props){
    super(props)
    this.state = {
        products: [],
    }

  }
 
  async componentDidMount () {
		const products = await fetch('http://localhost:3001/api/items?q=banana&limit=4')
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

export default Buscador;
