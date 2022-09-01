import React from 'react';
import Home from '../Home/Home';
import FlashDeals from '../../Components/FlashDeals/FlashDeals';
const Page = ({ productItems, cartItem, addToCart }) => {
    return (
        <>
            <Home cartItem={cartItem} />
            <FlashDeals productItems={productItems} addToCart={addToCart} />
        </>
    );
};

export default Page;