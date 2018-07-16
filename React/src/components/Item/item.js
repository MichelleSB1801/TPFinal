import React, { Component } from 'react';


class Item extends Component {
  constructor(props){
    super(props)
    this.state = {
        products: [],
    }
  }
 
  async componentDidMount () {
		const products = await fetch('http://localhost:3001/api/items')
		const productsjson = await products.json()
		console.log(products)
    this.setState({
      products: {productsjson}
    })
  }

  render() {
    return (
  	    <div>
          <div>hola</div>
        </div>
    );
  }
}
export default Item;