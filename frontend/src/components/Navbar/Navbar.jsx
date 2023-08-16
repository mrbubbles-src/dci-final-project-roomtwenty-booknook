import React from "react";
import "./navbar.scss";
import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

const Navbar = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleCloseModal = () => {
        setShowLoginModal(false);
    };

    const handleLoginClick = () => {
        setShowLoginModal(true);
    };

    const handleLoginFormSubmit = (formData) => {
        console.log("Username:", formData.username);
        console.log("Password:", formData);
        setShowLoginModal(false);
    };

    return (
        <nav className='navbar-container'>
            <div className='logo-container'>
                <p>bookNook</p>{" "}
            </div>
            <div className='btn-container'>
                <button className='btn-login' onClick={handleLoginClick}>Login</button>
                {showLoginModal && (
                    <div className='modal-overlay'>
                        <div className='modal'>
                            <h2>Login</h2>
                            <LoginForm
                                onSubmit={handleLoginFormSubmit}
                                onCancel={handleCloseModal}
                            />
                        </div>{" "}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
