import React from "react";
import logo from "../../assets/pics/logo_noText.svg";
import "./navbar.scss";

const Navbar = () => {
    return (
        <nav className='navbar-container'>
            <img className='logo' src={logo} alt='This is an image.' />
        </nav>
    );
};

export default Navbar;
