import React, { Component } from 'react';
import './breadcrumb.css';


class Breadcrumb extends Component {
  constructor(props){
    super(props)
  
  }

  
  render() {
    let producto = this.props.search
    return ( 
			<div className = "breadcrumb">
			  {producto	&&
				  <React.Fragment>
					  {this.props.search.map((info,i) => {
						  return (
							  <ul key={i} >
                  <li>{info}</li>
                  <li className='separador'> > </li>
                </ul>
              )
					  })}
				  </React.Fragment>
        }
      </div>
    );
  }
}

export default Breadcrumb;
