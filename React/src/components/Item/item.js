import React, { Component } from 'react';
import './item.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import icon from '../../img/ic_shipping.png'
import renderHTML from 'react-render-html'



class Item extends Component {


  render() {
    const props = this.props.item
    const url = "/items/" + props.id
    const shipp = this.props.item.free_shipping == true
    console.log(props.price.decimals)
    return ( 
      <Link to={url}>

        <div className= 'searchItem'>
            <div className = 'searchItem_img'>
              <img src={props.picture}/>
            </div>
            <div className='searchItem_text'>
              <div className='searchItem_price'>
                <span>${props.price.amount}<sup>{props.price.decimals}</sup></span>
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