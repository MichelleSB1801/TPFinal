import React, { Component } from 'react';
import './descrip.css';
import renderHTML from 'react-render-html'



class Descrip extends Component {

  render() {
      console.log(this.props, 'hola soy los props')
      const props = this.props.info.product
      const render = this.props.info.render;
    return ( 

        <div className = "ItemDescrip">
            <div className = 'descrip_img_txt'>
                <img src={render ? props.picture : ''}/>
                <div className = 'descrip_txt'>
                    <h2>Descripcion del Producto</h2>
                    <p>{render ? props.description : ''}</p>
                </div>
            </div>
            <div className='descrip_info'>
                <span className='descrip_quantity'>{render ? props.condition : ''} - {render ? props.sold_quantity : ''} vendidos</span>
                <span className='descrip_title'><b>{render ? props.title : ''}</b></span>
                <span className='descrip_price'>$ {render ? props.price.amount : ''}<sup>{render ? props.price.decimals : ''}</sup></span>
                <div className='buy_button'>
                    Comprar
                </div>
    </div>
        </div>
      
    );
  }
}
export default Descrip;