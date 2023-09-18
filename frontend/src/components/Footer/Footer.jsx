import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import "../../pages/Datenschutz/Datenschutz";
import "../../pages/Impressum/Impressum";
import "../../pages/About/About";

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='footer-container-item'>
                <Link to={"./Impressum"} className='footer-links'>
                    Impressum
                </Link>
            </div>{" "}
            <div className='footer-container-item'>
                <Link to={"./Datenschutz"} className='footer-links'>
                    Datenschutz
                </Link>
            </div>
            <div className='footer-container-item'>
                <Link to={"./About"} className='footer-links'>
                    Über Uns
                </Link>
            </div>
            <div className='footer-container-item'>
                <Link to={"#"} className='footer-links'>
                    Kontakt
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
