import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import "../../pages/Datenschutz/Datenschutz";
import "../../pages/Impressum/Impressum";
import "../../pages/About/About";

const Footer = () => {
    return (
        <footer className="footer-container">
            <Link to={"./Impressum"} className="footer-links">
                Impressum
            </Link>
            <Link to={"./Datenschutz"} className="footer-links">
                Datenschutz
            </Link>
            <Link to={"./About"} className="footer-links">
                Über Uns
            </Link>
            <Link to={"#"} className="footer-links">
                Kontakt
            </Link>
        </footer>
    );
};

export default Footer;
