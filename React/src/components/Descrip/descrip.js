import React, { Component } from 'react';
import './descrip.css';


class Descrip extends Component {
  constructor(props){
    super(props)
    this.state = {
        estado: 'Nuevo',
    }
  }

  render() {
      console.log(this.props.info.picture[0].url, 'Hola soy un prop')
    return ( 

        <div className = "ItemDescrip">
            <div className = 'descrip_img_txt'>
                <img src={this.props.info.picture[0].url}/>
                <div className = 'descrip_txt'>
                    <h2>Descripcion del Producto</h2>
                    <p>{this.props.info.description}</p>
                </div>
            </div>
            <div className='descrip_info'>
                <span className='descrip_quantity'>{this.props.info.condition} - {this.props.info.sold_quantity} vendidos</span>
                <span className='descrip_title'><b>{this.props.info.title}</b></span>
                <span className='descrip_price'>$ {this.props.info.price.amount}</span>
                <div className='buy_button'>
                    Comprar
                </div>
            </div>
        </div>
      
    );
  }
}
export default Descrip;