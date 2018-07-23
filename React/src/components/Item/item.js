import React, { Component } from 'react';
import './item.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import icon from '../../img/ic_shipping.png'
import renderHTML from 'react-render-html'



class Item extends Component {
  constructor(props){
    super(props)
  
  }



  formatCurrency (price) {
    let html = '$ '
    const newprice = Number(price) || 0
    if (!Number.isNaN(newprice)) {
        html += newprice.toFixed(2).replace(/\./g, ",").replace(/(\d)(?=(\d{3})+,)/g, "$1.")
        html = html.replace(/,/g, '<sup>')
        html += '</sup>'
    } else {
        html += price
    }
    return renderHTML(html)
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
                <span>{this.formatCurrency(this.props.item.price.amount)}</span>
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