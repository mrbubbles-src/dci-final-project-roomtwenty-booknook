import React, { useContext } from "react";
import { BookNookContext } from "../../context/BookNookProvider";
import "./LandingpageRegisterAndLogin.scss";
import image1 from "../../assets/pics/bookchallenge.jpg";
import image2 from "../../assets/pics/booklist.jpg";
import image3 from "../../assets/pics/bookreise.jpg";

const LandingpageRegisterAndLogin = () => {
    const { handleLoginClick } = useContext(BookNookContext);
    return (
        <>
            <hr />
            {/* TABLET & DESKTOP */}
            <section className='text-container-tablet'>
                <article className='article-container'>
                    <div className='article-container-text'>
                        <h2 className='article-heading'>Bücherlisten</h2>
                        <p className='article-text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sapiente fuga exercitationem sequi a quae ut
                            reprehenderit necessitatibus nulla, et non.
                        </p>
                    </div>
                    <img
                        className='landingpage-article-image'
                        src={image1}
                        alt=''
                    />
                </article>
                <article className='article-container'>
                    <div className='article-container-text'>
                        <h2 className='article-heading'>Challenges</h2>
                        <p className='article-text'>
                            Diese persönlichen Lesen-Challenges ermöglichen es
                            jedem, seine Lesegewohnheiten zu steigern, neue
                            Bücher zu erkunden und das Lesen zu einer
                            unterhaltsamen und erfüllenden Aktivität zu machen.
                        </p>
                    </div>
                    <img
                        className='landingpage-article-image'
                        src={image2}
                        alt=''
                    />
                </article>
                <article className='article-container'>
                    <div className='article-container-text'>
                        <h2 className='article-heading'>Du entscheidest</h2>
                        <p className='article-text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Consequatur officiis nihil quibusdam
                            exercitationem facere ducimus sint corporis debitis,
                            recusandae perferendis?
                        </p>
                    </div>
                    <img
                        className='landingpage-article-image'
                        src={image3}
                        alt=''
                    />
                </article>
                <button className='btn-login' onClick={handleLoginClick}>
                    Hier ist dein Ticket!
                </button>
            </section>
            <hr />
        </>
    );
};

export default LandingpageRegisterAndLogin;
