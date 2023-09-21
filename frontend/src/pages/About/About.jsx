import React from "react";
import "./About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-solid-svg-icons";

const About = () => {
    return (
        <div className="about-us">
            <div className="heading-container">
                <h2 className="heading">About us</h2>
            </div>
            <div className="image-container">
                <img
                    className="picture-container-individual-image"
                    src="../../../public/images/placeholder/Hamburger.jpg"
                    alt="Hamburger"
                />
            </div>
            <div className="picture-container">
                <div className="picture-container-individual-image">
                    <img
                        className="picture-container-individual-image-image"
                        src="../../../public/images/placeholder/Hamburger.jpg"
                        alt=""
                    />
                    <p className="picture-container-individual-image-name">
                        <strong>Manuel</strong>
                    </p>
                    <a
                        href="https://github.com/mrbubbles-src"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link-container"
                    >
                        <FontAwesomeIcon
                            className="social-link-container-icon"
                            icon={faGithub}
                        />{" "}
                    </a>
                    <a
                        href="https://www.linkedin.com/in/manuel-fahrenholz/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            className="social-link-container-icon"
                            icon={faLinkedin}
                        />
                    </a>
                </div>
                <div className="picture-container-individual-image">
                    <img
                        className="picture-container-individual-image-image"
                        src="../../../public/images/placeholder/Hamburger.jpg"
                        alt=""
                    />
                    <p className="picture-container-individual-image-name">
                        <strong>Jacqueline</strong>
                    </p>
                    <a
                        href="https://github.com/jacqueline-s-w"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link-container"
                    >
                        <FontAwesomeIcon
                            className="social-link-container-icon"
                            icon={faGithub}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jacqueline-scharrer-weißgerber/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link-container"
                    >
                        <FontAwesomeIcon
                            className="social-link-container-icon"
                            icon={faLinkedin}
                        />
                    </a>
                </div>
                <div className="picture-container-individual-image">
                    <img
                        className="picture-container-individual-image-image"
                        src="../../../public/images/placeholder/Hamburger.jpg"
                        alt=""
                    />
                    <p className="picture-container-individual-image-name">
                        <strong>Muhammed</strong>
                    </p>
                    <a
                        href="https://github.com/MuhammedTinmaz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link-container"
                    >
                        <FontAwesomeIcon
                            className="social-link-container-icon"
                            icon={faGithub}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/muhammed-tinmaz-b562a225a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link-container"
                    >
                        <FontAwesomeIcon
                            className="social-link-container-icon"
                            icon={faLinkedin}
                        />
                    </a>
                </div>
                <div className="picture-container-individual-image">
                    <img
                        className="picture-container-individual-image-image"
                        src="../../../public/images/placeholder/Hamburger.jpg"
                        alt=""
                    />
                    <p className="picture-container-individual-image-name">
                        <strong>Katharina</strong>
                    </p>
                    <a
                        href="https://github.com/Katharina-Groller"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link-container"
                    >
                        <FontAwesomeIcon
                            className="social-link-container-icon"
                            icon={faGithub}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/katharina-g-354362276/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link-container"
                    >
                        <FontAwesomeIcon
                            className="social-link-container-icon"
                            icon={faLinkedin}
                        />
                    </a>
                </div>
                <div className="picture-container-individual-image">
                    <img
                        className="picture-container-individual-image-image"
                        src="../../../public/images/placeholder/Hamburger.jpg"
                        alt=""
                    />
                    <p className="picture-container-individual-image-name">
                        <strong>Metin</strong>
                    </p>
                    <a
                        href="https://github.com/MetinArsu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link-container"
                    >
                        <FontAwesomeIcon
                            className="social-link-container-icon"
                            icon={faGithub}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/metin-m-arsu-4991b8276/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link-container"
                    >
                        <FontAwesomeIcon
                            className="social-link-container-icon"
                            icon={faLinkedin}
                        />
                    </a>
                </div>
            </div>
            <div className="paragraph-container container">
                <p className="first-paragraph">
                    Wir sind roomTwenty - eine Gruppe von Freunden die sich
                    während der Weiterbildung zum Fullstack Webentwickler beim
                    DCI Digital Career Institute gefunden hat.
                </p>
                <p className="second-paragraph">
                    Dies ist unser Finales Projekt unserer Weiterbildung,
                    'bookNook', eine Anwendung in der du nach Buchinformationen
                    suchen und deinen Lesefortschrit verwalten kannst in dem du
                    den Seitenstand der Bücher die du aktuell liest verfolgen
                    kannst und je eine Liste für deine bereits gelesenen Bücher
                    und den Büchern die noch lesen möchtes zur verfügung hast.
                </p>
                <p className="third-paragraph">
                    Wir hoffen dir gefällt es hier und, dass bookNook dir in
                    deiner Lesereise helfend zur Seite steht!
                </p>
            </div>
        </div>
    );
};

export default About;
