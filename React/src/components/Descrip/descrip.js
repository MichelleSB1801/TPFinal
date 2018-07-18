import React, { Component } from 'react';
import './descrip.css';


class Descrip extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return ( 
        <div className = "ItemDescrip">
            <div className = 'descrip_img_txt'>
                <img src={this.props.item.picture}/>
                <p>Mola</p>
            </div>
            <div className='descrip_info'>
                <span className='descrip_quantity'>$ {this.props.item.price.amount}</span>
                <span>{this.props.item.free_shipping}</span>
                <span>{this.props.item.title}</span>
            </div>
            <div className='searchItem_location'>
                <span>{this.props.item.address}</span>
            </div>
        </div>
      
    );
  }
}
export default Descrip;