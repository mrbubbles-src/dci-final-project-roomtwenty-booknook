import React, { useContext } from "react";
import "./navbar.scss";
import Modal from "../Modal/Modal";
import LoginForm from "../LoginForm/LoginForm";
import SignupForm from "../SignupForm/SignupForm";
import { Link } from "react-router-dom";
import { BookNookContext } from "../../context/BookNookProvider";

const Navbar = () => {
    const {
        isLoggedIn,
        setIsLoggedIn,
        showModal,
        handleCloseModal,
        handleLoginClick,
        handleLogout,
        isLoginVisible,
        toggleForm,
    } = useContext(BookNookContext);

    return (
        <nav className="navbar-container">
            <div className="logo-container">
                <Link to={"/"} className="logo-text">
                    bookNook
                </Link>{" "}
            </div>
            <div className="btn-container">
                {isLoggedIn ? (
                    <button className="btn-login" onClick={handleLogout}>
                        Logout
                    </button>
                ) : (
                    <button className="btn-login" onClick={handleLoginClick}>
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
                            <SignupForm
                                onClose={handleCloseModal}
                                onLogin={() => setIsLoggedIn(true)}
                            />
                        )}
                        <button className="btn-style" onClick={toggleForm}>
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
