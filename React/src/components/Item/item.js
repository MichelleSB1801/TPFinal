import React, { Component } from 'react';
import './item.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import icon from '../../img/ic_shipping.png'


class Item extends Component {
  constructor(props){
    super(props)
  }


  render() {
    const url = "/items/" + this.props.item.id
    const shipp = this.props.item.free_shipping == true
    return ( 
      <Link to={url}>

        <div className= 'searchItem'>
            <div className = 'searchItem_img'>
              <img src={this.props.item.picture}/>
            </div>
            <div className='searchItem_text'>
              <div className='searchItem_price'>
                <span>$ {this.props.item.price.amount}</span>
                {shipp &&
                  <img className='shipp' src={icon} />
                }
                </div>
              <div className='searchItem_desc'>
              <span>{this.props.item.title}</span>
              </div>
            </div>
            <div className='searchItem_location'>
              <span>{this.props.item.address}</span>
          </div>  
        </div>
      </Link>    

    );
  }
}
export default Item;