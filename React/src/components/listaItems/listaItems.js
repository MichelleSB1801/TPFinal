import React, { Component } from 'react';
import Item from '../Item/item'

import './listaItems.css';


class ListaItems extends Component {
  constructor(props){
    super(props)

  }
 
  
  render() {
		let producto = this.props && this.props.search
    return ( 
			<div className = "list_container">
			{producto	&&
				<React.Fragment>
					{this.props.search.map((info,i) => {
						return (
							<Item key={i} item={info} />
						)
					})}
				</React.Fragment>
			}		
      </div>
    );
  }
}

export default ListaItems;
