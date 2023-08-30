import React, { useState, useEffect, useContext } from "react";
import "./navbar.scss";
import Modal from "../Modal/Modal";
import LoginForm from "../LoginForm/LoginForm";
import SignupForm from "../SignupForm/SignupForm";
import { Link } from "react-router-dom";
import useAuth from "../../customhooks/auth";
import { BookNookContext } from "../../context/BookNookProvider";

const Navbar = () => {
    const { logout } = useAuth();
    const [showModal, setShowModal] = useState(false);
    const [isLoginVisible, setIsLoginVisible] = useState(true);
    const { isLoggedIn, setIsLoggedIn } = useContext(BookNookContext);

    const toggleForm = () => {
        setIsLoginVisible(!isLoginVisible);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleLoginClick = () => {
        setShowModal(true);
    };

    const handleLogout = () => {
        logout();
        setIsLoggedIn(false);
    };

    return (
        <nav className='navbar-container'>
            <div className='logo-container'>
                <Link to={"/"} className='logo-text'>
                    bookNook
                </Link>{" "}
            </div>
            <div className='btn-container'>
                {isLoggedIn ? (
                    <button className='btn-login' onClick={handleLogout}>
                        Logout
                    </button>
                ) : (
                    <button className='btn-login' onClick={handleLoginClick}>
                        Login
                    </button>
                )}

                {showModal && (
                    <Modal onClose={handleCloseModal}>
                        {isLoginVisible ? (
                            <LoginForm
                                onClose={handleCloseModal}
                                onLogin={() => setIsLoggedIn(true)}
                            />
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
