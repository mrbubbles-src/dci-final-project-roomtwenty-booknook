import React, { useContext } from "react";
import { BookNookContext } from "../../context/BookNookProvider";
import "./LandingpageRegisterAndLogin.scss";

const LandingpageRegisterAndLogin = () => {
    const { handleLoginClick } = useContext(BookNookContext);
    return (
        <>
            {" "}
            <section>
                <article className='text-container'>
                    <p className='text login'>
                        Wenn du alle unsere Features nutzen möchtest,
                        registriere dich doch bei uns und lege sowie verwalte
                        deine eigenen Bücherlisten.
                    </p>
                    <p className='text login'>
                        Erstelle eigene Challenges, um am Ball zu bleiben.{" "}
                    </p>
                    <p className='text login'>
                        Wohin die Reise geht, liegt ganz allein in deiner
                        Entscheidung!
                    </p>
                    <button className='btn-login' onClick={handleLoginClick}>
                        Hier ist dein Ticket!
                    </button>
                </article>
            </section>
            {/* TABLET & DESKTOP */}
            <section className='text-container-tablet'>
                <article className='article-container'>
                    <div className='article-container-text'>
                        <h2>Bücherlisten</h2>
                        <p className='article-text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sapiente fuga exercitationem sequi a quae ut
                            reprehenderit necessitatibus nulla, et non.
                        </p>
                    </div>
                    <img src='' alt='' />
                </article>
                <article className='article-container'>
                    <div className='article-container-text'>
                        <h2>Challenges</h2>
                        <p className='article-text'>
                            Diese persönlichen Lesen-Challenges ermöglichen es
                            jedem, seine Lesegewohnheiten zu steigern, neue
                            Bücher zu erkunden und das Lesen zu einer
                            unterhaltsamen und erfüllenden Aktivität zu machen.
                        </p>
                    </div>
                    <img src='' alt='' />
                </article>
                <article className='article-container'>
                    <div className='article-container-text'>
                        <h2>Du entscheidest</h2>
                        <p className='article-text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Consequatur officiis nihil quibusdam
                            exercitationem facere ducimus sint corporis debitis,
                            recusandae perferendis?
                        </p>
                    </div>
                    <img src='' alt='' />
                </article>
                <button className='btn-login' onClick={handleLoginClick}>
                    Hier ist dein Ticket!
                </button>
            </section>
        </>
    );
};

export default LandingpageRegisterAndLogin;
