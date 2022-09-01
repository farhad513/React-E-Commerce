import React from 'react';
import Categories from '../Categories/Categories';
import SlideCard from '../SlideCard/SlideCard';
import Slider from '../Slider/Slider';
import './Home.css';
const Home = () => {
    return (
        <>
            <div className="home">
                <div className="container d_flex">
                    <Categories />
                    <Slider/>
                </div>
            </div>
        </>
    );
};

export default Home;