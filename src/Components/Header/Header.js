import React from 'react';
import "./Header.css";
import Head from '../Head/Head';
import Search from '../Search/Search';
import Navbar from '../Navbar/Navbar';
const Header = ({ cartItem }) => {
    return (
        <>
            <Head />
            <Search cartItem={cartItem} />
            <Navbar />
        </>
    );
};

export default Header;