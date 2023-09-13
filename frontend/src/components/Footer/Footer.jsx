import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
    return (
        <footer className='footer-container'>
            <Link to={"#"} className='footer-links'>
                Impressum
            </Link>
            <Link to={"#"} className='footer-links'>
                Datenschutz
            </Link>
            <Link to={"#"} className='footer-links'>
                About
            </Link>
            <Link to={"#"} className='footer-links'>
                Kontakt
            </Link>
        </footer>
    );
};

export default Footer;
