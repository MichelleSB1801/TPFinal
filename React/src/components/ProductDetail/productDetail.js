import React, { Component } from 'react';
import Descrip from '../Descrip/descrip'
import Buscador from '../buscador/buscador'
import Breadcrumb from '../breadcrumb/breadcumb';

import './productDetail.css';




class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: {},
            render: false
        }
    }

    async componentDidMount () {
        const qs = this.props.match.params.id
        console.log(qs, 1)
        const products = await fetch('http://localhost:3001/api/items/' + qs)
        const productsjson = await products.json()
        this.setState({
          product: productsjson.item,
          render: true
        })
      }

  render() {
    const infoProd = this.state
    const infoCat = this.state.product.category
    console.log('render')

    return (
      
      <div className="Product_Detail">
        <Buscador />
        <Breadcrumb search={infoCat} />
        <Descrip info={infoProd} />
      </div>
    );
  }
}

export default ProductDetail;
