import React from 'react';
import './Search.css';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
const Search = ({ cartItem }) => {
    window.addEventListener('scroll', function () {
        const search = document.querySelector('.search');
        search.classList.toggle("active", window.scrollY > 100);
    })
    return (
        <>
            <div className="search">
                <div className="container c_flex">
                    <div className="logo width">
                        <img src={logo} alt="" />
                    </div>
                    <div className="search-box f_flex">
                        <i className="fa fa-search "></i>
                        <input type="text" placeholder='Enter Product Search...' />
                        <span>All Category</span>
                    </div>
                    <div className="icon f_flex width">
                        <i className="fa fa-user  icon_circle"></i>
                        <div className="cart">
                            <Link to='/cart'><i className="fa fa-shopping-bag icon_circle"></i>
                            </Link>
                            <span>{cartItem.length === 0 ? " " : cartItem.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;