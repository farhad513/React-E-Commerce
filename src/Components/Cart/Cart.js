import React from 'react';
import './Cart.css';
const Cart = ({ cartItem, addToCart, decraseQty }) => {
    const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0)
    return (
        <>
            <section className="cart-items">
                <div className="container d_flex">
                    <div className="cart-details">
                        {
                            cartItem.length === 0 && <h1 className='no-items product'>No items are add in cart</h1>
                        }

                        {
                            cartItem.map((item) => {
                                const productQty = item.price * item.qty
                                return (
                                    <div className="cart-list product d_flex " key={item.id}>
                                        <div className="img">
                                            <img src={item.cover} alt="" />
                                        </div>
                                        <div className="cart-details">
                                            <h3>{item.title}</h3>
                                            <h4>{item.price}.00 X {item.qty} {" "}
                                                <span> = $ {productQty}.00</span>
                                            </h4>
                                        </div>
                                        <div className="cart-items-fun">
                                            <div className="removeCart">
                                                <button className="removeCart">
                                                    <i className="fa-solid fa-xmark"></i>
                                                </button>
                                            </div>
                                            <div className="cart-control d_flex">
                                                <button className="incCart" onClick={() => addToCart(item)}>
                                                    <i className='fa fa-plus'></i>
                                                </button>
                                                <button className="decCart" onClick={() => decraseQty(item)}>
                                                    <i className='fa fa-minus'></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cart-item-price"></div>
                                    </div>
                                )
                            })}
                    </div>
                    <div className="cart-total product">
                        <h2>Cart Summary</h2>
                        <div className="d_flex">
                            <h4>Total price: </h4>
                            <h3>{totalPrice}.00</h3>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Cart;