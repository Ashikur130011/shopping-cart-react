import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} =props
    const shipping = 20
	let total = 0
	for(const product of cart){
		total = total + product.price
	}
	const tax = total * 0.01
	const grandTotal = total + shipping +tax
    return (
      <div className='cart-container'>
        <h3>Order Summary</h3>
        <h5>Items ordered: {cart.length}</h5>
        <div className='description'>
          <p>Total: ${total}</p>
          <p>Tax: ${tax.toFixed(2)}</p>
          <p>Shipping: ${shipping}</p>
          <p>Estimated Tax: ${grandTotal}</p>
        </div>
        <button className="btn-cmn">Remove</button>
      </div>
    );
};

export default Cart;