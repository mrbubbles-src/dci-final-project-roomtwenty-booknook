import React, { useContext } from "react";
import { BookNookContext } from "../../context/BookNookProvider";
import "./LandingpageRegisterAndLogin.scss";

const LandingpageRegisterAndLogin = () => {
    const { handleLoginClick } = useContext(BookNookContext);
    return (
        <article className='text-container'>
            <p className='text login'>
                Wenn du alle unsere Features nutzen möchtest, registriere dich
                doch bei uns und lege sowie verwalte deine eigenen Bücherlisten.
            </p>
            <p className='text login'>
                Erstelle eigene Challenges, um am Ball zu bleiben.{" "}
            </p>
            <p className='text login'>
                Wohin die Reise geht, liegt ganz allein in deiner Entscheidung!
            </p>
            <button className='btn-login' onClick={handleLoginClick}>
                Hier ist dein Ticket!
            </button>
        </article>
    );
};

export default LandingpageRegisterAndLogin;
