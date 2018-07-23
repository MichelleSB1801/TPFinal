import React, { Component } from 'react';
import Descrip from '../Descrip/descrip'
import Buscador from '../buscador/buscador'
import Breadcrumb from '../breadcrumb/breadcumb';

import './productDetail.css';




class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: [],
            
        }
    }

    async componentDidMount () {
        const qs = this.props.match.params.id
        const products = await fetch('http://localhost:3001/api/items/' + qs)
        const productsjson = await products.json()
        console.log('hola', this.props.location)
        this.setState({
          product: productsjson
        })    
      }

    async componentDidUpdate (prevProps) {
      
      const qs = this.props.match.params.id
    
      if (this.props.match.params.id !== prevProps.match.params.id) {
        console.log('update', qs)
        console.log('jaja', prevProps.match.params)
        const products = await fetch('http://localhost:3001/api/items/' + qs)
        const productsjson = await products.json()
        console.log('hola', this.props.location)
        this.setState({
          product: productsjson
        })
        console.log(productsjson);
      }
    }



  render() {
    console.log(this.state.product, 'holaaa')
    const infoProd = this.state.product.item
    let producto = this.state.product && this.state.product.item

    return (
      
      <div className="Product_Detail">
        <Buscador />
        
        {producto	&&
        	<React.Fragment>
            <Breadcrumb info={infoProd} />
            <Descrip info={infoProd}/>
          </React.Fragment>
        }
      </div>
    );
  }
}

export default ProductDetail;
