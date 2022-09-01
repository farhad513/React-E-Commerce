import React from 'react';
import SlideCard from '../SlideCard/SlideCard';
import './Slider.css'
const Slider = () => {
    return (
        <>
            <div className="homeSlide contentWidth">
                <div className="container">
                    <SlideCard />
                </div>
            </div>
        </>
    );
};

export default Slider;