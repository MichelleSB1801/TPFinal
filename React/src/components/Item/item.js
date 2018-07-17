import React, { Component } from 'react';
import './item.css';


class Item extends Component {
  constructor(props){
    super(props)
  }

  render() {
    console.log(this.props.item.picture)
    return ( 
      <div className = "searchItem">
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
    );
  }
}
export default Item;