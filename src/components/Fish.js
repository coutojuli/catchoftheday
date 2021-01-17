import React from 'react';
import {formatPrice } from '../helpers';
import PropTypes, { number } from 'prop-types';

class Fish extends React.Component{
    static propTypes = {
        details: PropTypes.shape ({
            image: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
            desc: PropTypes.string,
            status: PropTypes.string,
        }),
        addToOrder: PropTypes.func,
        index: PropTypes.string
    };
    handleClick =() => {
        this.props.addToOrder(this.props.index);
    };
    render(){
        const { image,name,price,desc,status} = this.props.details;
        const isAvailable = status === 'available';
        return(

           <li className="menu-fish">
               <img src={image} alt={name} />
               <h3 className="fish-name"> {name} 
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button disabled={!isAvailable} onClick={this.handleClick}>
                    { isAvailable ? 'Add To Order' : 'Sold out'}
                </button>
           </li>
        );
    }
}

export default Fish;