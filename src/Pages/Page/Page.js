import React from 'react';
import Home from '../Home/Home';
import FlashDeals from '../../Components/FlashDeals/FlashDeals';
import TopCategory from '../../Components/Top/TopCategory';
import NewArrivals from '../../Components/NewArrivals/NewArrivals';
import Anno from '../../Components/Annocuments/Anno';
import Wrapper from '../../Components/wrapper/Wrapper';
const Page = ({ productItems, cartItem, addToCart }) => {
    return (
        <>
            <Home cartItem={cartItem} />
            <FlashDeals productItems={productItems} addToCart={addToCart} />
            <TopCategory />
            <NewArrivals />
            <Anno />
            <Wrapper />
        </>
    );
};

export default Page;