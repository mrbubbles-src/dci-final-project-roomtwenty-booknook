import React, { useState } from "react";
import "./navbar.scss";
import Modal from "../Modal/Modal";

const Navbar = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleCloseModal = () => {
        setShowLoginModal(false);
    };

    const handleLoginClick = () => {
        setShowLoginModal(true);
    };

    return (
        <nav className="navbar-container">
            <div className="logo-container">
                <p className="logo-text">bookNook</p>{" "}
            </div>
            <div className="btn-container">
                <button className="btn-login" onClick={handleLoginClick}>
                    Login
                </button>
                {showLoginModal && (
                    <Modal
                        showLogin={showLoginModal}
                        onClose={handleCloseModal}
                    />
                )}
            </div>
        </nav>
    );
};

export default Navbar;
