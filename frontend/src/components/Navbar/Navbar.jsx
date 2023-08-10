import React from "react";
import logo from "../../assets/pics/logo_noText.svg";
import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className='navbar-container'>
            <img className='logo' src={logo} alt='This is an image.' />
        </nav>
    );
};

export default Navbar;
