import React, { useState } from "react";
import "./navbar.scss";
import Modal from "../Modal/Modal";
import LoginForm from "../LoginForm/LoginForm";
import SignupForm from "../SignupForm/SignupForm";
import { Link } from "react-router-dom";
import useAuth from "../../customhooks/auth";

const Navbar = () => {
    const { logout } = useAuth();
    const [showModal, setShowModal] = useState(false);
    const [isLoginVisible, setIsLoginVisible] = useState(true);

    const toggleForm = () => {
        setIsLoginVisible(!isLoginVisible);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleLoginClick = () => {
        setShowModal(true);
    };

    return (
        <nav className='navbar-container'>
            <div className='logo-container'>
                <Link to={"/"} className='logo-text'>
                    bookNook
                </Link>{" "}
            </div>
            <div className='btn-container'>
                <button className='btn-login' onClick={handleLoginClick}>
                    Login
                </button>
                <button className='btn-login' onClick={logout}>
                    Logout
                </button>
                {showModal && (
                    <Modal onClose={handleCloseModal}>
                        {isLoginVisible ? (
                            <LoginForm onClose={handleCloseModal} />
                        ) : (
                            <SignupForm onClose={handleCloseModal} />
                        )}
                        <button className='btn-style' onClick={toggleForm}>
                            {isLoginVisible
                                ? "Noch kein Mitglied?"
                                : "Bereits Mitglied?"}
                        </button>
                    </Modal>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
