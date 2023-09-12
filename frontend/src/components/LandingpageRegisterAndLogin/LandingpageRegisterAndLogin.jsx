import React, { useContext } from "react";
import { BookNookContext } from "../../context/BookNookProvider";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import LoginForm from "../LoginForm/LoginForm";
import SignupForm from "../SignupForm/SignupForm";
import "./LandingpageRegisterAndLogin.scss";

const LandingpageRegisterAndLogin = () => {
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
        <article className='text-container'>
            <p className='text login'>
                Wenn du alle unsere Features nutzen möchtest, registriere dich
                doch bei uns und lege sowie verwalte deine eigenen Bücherlisten.
            </p>
            <p className='text login'>
                Erstelle eigene Challenges um am Ball zu bleiben.
            </p>
            <p className='text login'>
                Wohin die Reise geht, ist ganz allein Deine Entscheidung !
            </p>
            <button className='btn-login' onClick={handleLoginClick}>
                Hier ist dein Ticket
            </button>
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
                    <button className='btn-login' onClick={toggleForm}>
                        {isLoginVisible
                            ? "Noch kein Mitglied?"
                            : "Bereits Mitglied?"}
                    </button>
                </Modal>
            )}
        </article>
    );
};

export default LandingpageRegisterAndLogin;
