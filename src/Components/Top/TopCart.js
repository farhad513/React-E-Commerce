import React from 'react';
import TopData from './TopData';
import Slider from "react-slick";
const TopCart = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoPlay: true
    };
    return (
        <>
            <Slider {...settings}>
                {
                    TopData.map((value, index) => {
                        return (
                            <div className='box product' key={index}>
                                <div className="nameTop d_flex">
                                    <span className="tLeft">{value.name}</span>
                                    <span className="tRight">{value.des}</span>
                                </div>
                                <div className="img"><img src={value.cover} alt="" /></div>
                            </div>
                        )
                    })
                }
            </Slider>
        </>
    );
};

export default TopCart;