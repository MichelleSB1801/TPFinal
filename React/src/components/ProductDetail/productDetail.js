import React, { Component } from 'react';
import Descrip from '../Descrip/descrip'
import Buscador from '../buscador/buscador'
import Breadcrumb from '../breadcrumb/breadcumb';

import './productDetail.css';




class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: []
        }
    }

    async componentDidMount () {
        const qs = this.props.match.params.id
        console.log(qs, 1)
        const products = await fetch('http://localhost:3001/api/items/' + qs)
        const productsjson = await products.json()
        this.setState({
          product: productsjson.item
        })
        console.log(this.state.product)    
      }

    async componentDidUpdate (prevProps) {
      
      const qs = this.props.match.params.id
      console.log(qs, 2)
      if (this.props.match.params.id !== prevProps.match.params.id) {
        const products = await fetch('http://localhost:3001/api/items/' + qs)
        const productsjson = await products.json()
        this.setState({
          product: productsjson.item
        })
      }
    }



  render() {
    const infoProd = this.state.product
    const infoCat = this.state.product.category
    let producto = this.state.product
    console.log(infoProd.picture, 'Hola soy el pre prop')
    return (
      
      <div className="Product_Detail">
        <Buscador />
        
        {producto	&&
        	<React.Fragment>
            <Breadcrumb search={infoCat} />
            <Descrip info={infoProd} />
          </React.Fragment>
        }
      </div>
    );
  }
}

export default ProductDetail;
