import React from 'react';
import Ndata from './Ndata';
const CartAri = () => {
    return (
        <>
            <section className="content grid product">
                {
                    Ndata.map((value, index) => {
                        return (
                            <div className="" key={index}>
                                <div className="img">
                                    <img src={value.cover} alt="" />
                                </div>
                                <h4>{value.title}</h4>
                                <span>{value.price}</span>
                            </div>
                        )
                    })
                }
            </section>
        </>
    );
};

export default CartAri;