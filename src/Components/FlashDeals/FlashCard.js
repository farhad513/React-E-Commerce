import React, { useState } from 'react';
import Slider from "react-slick";

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <i className="fa fa-long-arrow-alt-right"></i>
            </button>
        </div>
    )
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <i className="fa fa-long-arrow-alt-left"></i>
            </button>
        </div>
    )
};
const FlashCard = ({ productItems, addToCart }) => {

    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }
    // console.log(increment);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <>
            <Slider {...settings}>
                {
                    productItems.map((productItem) => {
                        return (
                            <div className="box" key={productItem.id}>
                                <div className="product mtop">
                                    <div className="img">
                                        <span className="discount">{productItem.discount} % off</span>
                                        <img src={productItem.cover} alt={productItem.title} width="200px" />
                                        <div className="product-like" onClick={increment}>
                                            <label>{count}</label> <br />
                                            <i className="fa-regular fa-heart"></i>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h3>{productItem.title}</h3>
                                        <div className="rate">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="price">
                                            <h4>{productItem.price}.00</h4>
                                            <button onClick={() => addToCart(productItem)} >
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </>
    );
};

export default FlashCard;