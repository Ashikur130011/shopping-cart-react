import React from 'react';

import './Product.css'

const Product = (props) => {
	const{name, img, price, ratings, seller, stock} = props.product
   
    return (
      <div className="card">
        <div className="image">
          <img src={img} alt="Photo isn't available" />
        </div>
        <div className="description">
          <h3>{name}</h3>
          <h5>by {seller}</h5>
          <h2>${price}</h2>
          <h5>only {stock} left in stock - order soon</h5>
         
          <button
            onClick={() => props.addToCart(props.product)}
            className="btn-cmn"
          >
            add to cart
          </button>
        </div>
      </div>
    );
};

export default Product;