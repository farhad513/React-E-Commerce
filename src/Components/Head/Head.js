import React from 'react';
import './Head.css';
const Head = () => {
    return (
        <>
            <section className='head'>
                <div className="container d_flex">
                    <div className="left row">
                        <i className="fa fa-phone"></i>
                        <label>+8801518 690 471</label>
                        <i className="fa fa-envelope"></i>
                        <label>mdfarhadhossain0401@gmail.com</label>
                    </div>
                    <div className="right row rText">
                        <label> Website FAQ's  </label>
                        <label> Need Helps</label>
                        { /*<span>🇧🇩 </span>*/}
                        <label >EN</label>
                        { /*<span>🇧🇩 </span>*/}
                        <label >USA</label>
                    </div>
                </div>
            </section> 
        </>
    );
};

export default Head;