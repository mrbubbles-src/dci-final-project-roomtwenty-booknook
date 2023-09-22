import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./about.scss";
import metin from "../../../public/images/aboutus/metin.jpg";
import manu from "../../../public/images/aboutus/manu.jpg";
import jacky from "../../../public/images/aboutus/jacky.jpg";
import kathi from "../../../public/images/aboutus/kathi.jpg";
import momo from "../../../public/images/aboutus/momo.png";

const developers = [
    {
        name: "Metin Arsu",
        title: "Fullstack Web Developer (MERN)",
        githubLink: "https://github.com/MetinArsu",
        linkedinLink: "https://www.linkedin.com/in/metin-m-arsu-4991b8276/",
        picture: metin,
    },
    {
        name: "Manuel Fahrenholz",
        title: "Fullstack Web Developer (MERN)",
        githubLink: "https://github.com/ManuelFahrenholz",
        linkedinLink: "https://www.linkedin.com/in/manuel-fahrenholz/",
        picture: manu,
    },
    {
        name: "Jacqueline Scharrer-Weißgerger",
        title: "Fullstack Web Developer (MERN)",
        githubLink: "https://github.com/jacqueline-s-w",
        linkedinLink:
            "https://www.linkedin.com/in/jacqueline-scharrer-wei%C3%9Fgerber/",
        picture: jacky,
    },
    {
        name: "Katharina Groller",
        title: "Fullstack Web Developer (MERN)",
        githubLink: "https://github.com/Katharina-Groller",
        linkedinLink: "https://www.linkedin.com/in/katharina-g-354362276/",
        picture: kathi,
    },
    {
        name: "Muhammed Tinmaz",
        title: "Fullstack Web Developer (MERN)",
        githubLink: "https://github.com/MuhammedTinmaz",
        linkedinLink: "https://www.linkedin.com/in/muhammed-tinmaz-b562a225a/",
        picture: momo,
    },
];

const About = () => {
    return (
        <section className="test-container">
            <section className="about-flex-container">
                {developers.map((developer, index) => (
                    <article className="about-card" key={index}>
                        <div className="about-card-imgbox">
                            <img
                                className="about-card-imgbox-picture"
                                src={developer.picture}
                                alt={`Profilbild von ${developer.name}`}
                            />
                        </div>
                        <div className="about-card-content">
                            <div className="about-card-content-details">
                                <h2 className="about-card-content-details-name">
                                    {developer.name}
                                    <br />
                                    <span className="about-card-content-details-name-title">
                                        {developer.title}
                                    </span>
                                </h2>
                                <h3 className="about-card-content-details-follow">
                                    Folge mir auf:
                                </h3>
                                <div className="about-card-content-details-name-data">
                                    <NavLink
                                        target="_blank"
                                        to={developer.githubLink}
                                    >
                                        <div className="about-card-content-details-name-data-container">
                                            <FontAwesomeIcon
                                                className="about-card-content-details-name-data-container-icon"
                                                icon={faSquareGithub}
                                            />
                                        </div>
                                    </NavLink>
                                    <NavLink
                                        target="_blank"
                                        to={developer.linkedinLink}
                                    >
                                        <div className="about-card-content-details-name-data-container">
                                            <FontAwesomeIcon
                                                className="about-card-content-details-name-data-container-icon2"
                                                icon={faLinkedin}
                                            />
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </section>
            <article>
                <p className="about-text">
                    Willkommen bei bookNook! roomTwenty ist der Name unseres
                    ambitionierten Teams, das sich auf sein Abschlussprojekt im
                    Rahmen der Fullstack Developer-Ausbildung am Digital Career
                    Institute (DCI) vorbereitet. <br /> <br />
                    Unser Name, Room Twenty, symbolisiert unseren Weg von den
                    Anfängen in unserem Klassenzimmer (Raum 20), wo wir die
                    Grundlagen der Programmierung erlernt haben, bis zu unserem
                    aktuellen Projekt, bei dem wir unsere Fähigkeiten auf die
                    nächste Stufe heben. <br /> <br />
                    Wir sind stolz auf unsere Entwicklung und das, was wir bis
                    heute erreicht haben. Unsere Expertise reicht von
                    Frontend-Technologien bis zur Backend-Entwicklung, und wir
                    sind bestrebt, die neuesten Trends und Technologien in der
                    Webentwicklung zu verfolgen. <br /> <br />
                    Kontaktieren Sie uns, um mehr über unsere Arbeit zu erfahren
                    oder um Ihr nächstes Webentwicklungsprojekt zu besprechen.
                    Wir sind bereit, Ihre Ideen zum Leben zu erwecken und
                    großartige digitale Erfahrungen zu schaffen.
                </p>
            </article>
        </section>
    );
};

export default About;
