import './App.css';
import Header from './Components/Header/Header';
import Page from './Pages/Page/Page';
import { Routes, Route } from "react-router-dom";
import Data from './Components/FlashDeals/Data';
import React, { useState } from 'react';
import Cart from './Components/Cart/Cart';
function App() {
  const { productItems } = Data;
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = cartItem.find((item => {
      return (
        item.id === product.id
      )
    }));
    if (productExit) {
      setCartItem(cartItem.map((item) => {
        return (
          item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item
        )
      }))
    }
    else {
      setCartItem([...cartItem, { ...product, qty: 1 }])
    }
  }

  const decraseQty = product => {
    const productExit = cartItem.find((item => {
      return (
        item.id === product.id
      )
    }));
    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== productExit.id))
    }
    else {
      setCartItem(cartItem.map((item) => item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item))
    }
  }

  return (
    <>
      <Header cartItem={cartItem} />
      <Routes>
        <Route path='/' element={<Page productItems={productItems} addToCart={addToCart} />} />
        <Route path='/cart' element={<Cart cartItem={cartItem} addToCart={addToCart} decraseQty={decraseQty} />} />
      </Routes>
    </>
  );
}

export default App;
