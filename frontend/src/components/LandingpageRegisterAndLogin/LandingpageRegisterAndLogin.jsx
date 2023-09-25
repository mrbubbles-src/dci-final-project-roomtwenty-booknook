import React, { useContext } from "react";
import { BookNookContext } from "../../context/BookNookProvider";
import "./LandingpageRegisterAndLogin.scss";
import image1 from "../../../public/images/various/bookchallenge.jpg";
import image2 from "../../../public/images/various/booklist.jpg";
import image3 from "../../../public/images/various/bookreise.jpg";

const LandingpageRegisterAndLogin = () => {
    const { handleLoginClick } = useContext(BookNookContext);
    return (
        <>
            <section className="text-container-tablet">
                <article className="article-container">
                    <div className="article-container-text">
                        <h2 className="article-heading">Challenges</h2>
                        <p className="article-text">
                            Diese persönlichen Lese-Challenges ermöglichen es
                            jedem seine Lesegewohnheiten zu steigern, neue
                            Bücher zu erkunden und das Lesen zu einer
                            unterhaltsamen und erfüllenden Aktivität zu machen.
                        </p>
                    </div>
                    <img
                        className="landingpage-article-image"
                        src={image1}
                        alt=""
                    />
                </article>
                <article className="article-container">
                    <div className="article-container-text-left">
                        <h2 className="article-heading-left">Bücherlisten</h2>
                        <p className="article-text-left">
                            Du kannst deine Bücher in verschiedenen Listen
                            speichern und sie nach deinen eigenen Vorlieben
                            organisieren und verwalten. Diese individuellen
                            Listen ermöglichen es dir, deine Leseerfahrungen zu
                            strukturieren und Bücher auf eine Weise zu
                            kategorisieren, die deinen Bedürfnissen und
                            Interessen entspricht.
                        </p>
                    </div>
                    <img
                        className="landingpage-article-image-left"
                        src={image2}
                        alt=""
                    />
                </article>
                <article className="article-container">
                    <div className="article-container-text">
                        <h2 className="article-heading">Deine Entscheidung!</h2>
                        <p className="article-text">
                            Bei deiner Reise durch die Welt der Bücher liegt die
                            Entscheidung ganz bei dir, egal welches Genre oder
                            Tempo du bevorzugst. Du bestimmst, wohin diese
                            literarische Reise führt und kannst Bücher in deinem
                            eigenen Tempo und nach deinem eigenen Geschmack
                            erkunden.
                        </p>
                    </div>
                    <img
                        className="landingpage-article-image"
                        src={image3}
                        alt=""
                    />
                </article>
                {/* <button className='btn-ticket' onClick={handleLoginClick}>
                    Hier ist dein Ticket!
                </button> */}
            </section>
        </>
    );
};

export default LandingpageRegisterAndLogin;
