import React, { Component } from 'react';
import './item.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Item extends Component {
  constructor(props){
    super(props)
  }


  render() {
    console.log(this.props.item.picture)
    const url = "/items/" + this.props.item.id

    return ( 
      <Link to={url}>

        <div className= 'searchItem'>
            <div className = 'searchItem_img'>
              <img src={this.props.item.picture}/>
            </div>
            <div className='searchItem_text'>
              <div className='searchItem_price'>
                <span>$ {this.props.item.price.amount}</span>
                <span>{this.props.item.free_shipping}</span>
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