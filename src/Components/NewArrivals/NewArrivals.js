import React from 'react';
import New from "../../images/new.png";
import './Arrivals.style.css';
import CartAri from './CartAri';
import Slider from "react-slick";


const NewArrivals = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <Slider {...settings}>
                <section className="newArrivals background">
                    <div className="container">
                        <div className="heading d_flex">
                            <div className="heading-left row f_flex">
                                {/* <i className="fa fa-border-all"></i>*/}
                                <img src={New} alt="" width={20} />
                                {/*  <img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png" alt="" /> */}
                                <h2>New Arrivals</h2>
                            </div>
                            <div className="heading-right row">
                                <span>view all</span>
                                <i className="fa fa-caret-right"></i>
                            </div>
                        </div>
                        <CartAri />
                    </div>
                </section>
            </Slider>
        </>
    );
};

export default NewArrivals;