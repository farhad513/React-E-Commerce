import React from 'react';
import sliderData from '../sdata';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const SlideCard = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
        appendDots: (dots) => {
            return <ul style={{ margin: "0px" }}>{dots}</ul>
        }
    };
    return (
        <>
            <Slider {...settings}>
                {
                    sliderData.map((value, index) => {
                        return (
                            <div className="box d_flex top" key={index}>
                                <div className="left">
                                    <h1>{value.title}</h1>
                                    <p>{value.des}</p>
                                    <button className='btn btn-primary'>Visit Collection</button>
                                </div>
                                <div className="right">
                                    <img src={value.cover} alt={value.title} />
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </>
    );
};

export default SlideCard;