import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
   const [products, setProducts] = useState([])
   const [cart, setCart] = useState([])
   const [displayProducts, setDisplayProducts] = useState([])

   useEffect( () => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
      .then( res => res.json())
      .then(data => {
		setProducts(data)
		setDisplayProducts(data)
	  })
   },[])

   const addToCart = product =>{
		const newCart = [...cart, product]
		setCart(newCart)
   }
   const searchProducts = e => {
		const searchText = e.target.value;
		const displayProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
		setDisplayProducts(displayProduct)
		console.log(displayProduct);
   }

    return (
      <>
        <div className="input-div">
          <input
            type="search"
            onChange={searchProducts}
            placeholder="type here to search..."
            name=""
            id=""
          />
          <button></button>
        </div>
        <div className="shop-container">
          <div className="product-container">
           {
            displayProducts.map(product => <Product
				key={product.id}
				product={product}
				addToCart={addToCart}
              ></Product>)
           }
          </div>
          <div className="cart-container">
           <Cart cart={cart}></Cart>
          </div>
        </div>
      </>
    );
};

export default Shop;