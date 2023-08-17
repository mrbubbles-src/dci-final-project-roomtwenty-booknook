import React, { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../SignupForm/SignupForm";
import "./modal.scss";

const Modal = ({ showLogin, onClose }) => {
    const [isLoginVisible, setIsLoginVisible] = useState(showLogin);

    const toggleForm = () => {
        setIsLoginVisible(!isLoginVisible);
    };

    const handleLoginSubmit = (formData) => {
        console.log("Login Daten:", formData);
        onClose();
    };

    const handleSignupSubmit = (formData) => {
        console.log("Signup Data:", formData);
        onClose();
    };

    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <button className='btn-style btn-close' onClick={onClose}>
                    X
                </button>
                {isLoginVisible ? (
                    <LoginForm onSubmit={handleLoginSubmit} onClose={onClose} />
                ) : (
                    <SignupForm
                        onSubmit={handleSignupSubmit}
                        onCancel={onClose}
                    />
                )}
                <button className='btn-style' onClick={toggleForm}>
                    {isLoginVisible
                        ? "Noch kein Mitglied?"
                        : "Bereits Mitglied?"}
                </button>
            </div>
        </div>
    );
};

export default Modal;
