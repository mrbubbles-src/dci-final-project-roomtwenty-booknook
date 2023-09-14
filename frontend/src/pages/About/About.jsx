import React from "react";
import "./About.scss";

const About = () => {
    return (
        <>
            <div className="heading-container">
                <h2 className="heading">About us</h2>
            </div>
            {/* <div className="image-container">
                <img
                    className="image"
                    src="../../../public/images/placeholder/Hamburger.jpg"
                    alt="Hamburger"
                />
            </div> */}

            <div className="first-paragraph-container container">
                <img
                    className="image"
                    src="../../../public/images/placeholder/Hamburger.jpg"
                    alt=""
                />
                <p className="first-paragraph">
                    Wir sind die Gruppe RoomTwenty, die sich auf eine spannende
                    Reise in die Welt der Webentwicklung begeben haben. Jeder
                    von uns hat verschiedene Situationen erlebt und dadurch
                    beschlossen, eine Umschulung zum Webentwickler zu beginnen.
                    Unsere unterschiedlichen Hintergründe und Erfahrungen
                    bereichern unser Team und ermöglichen es uns, aus
                    verschiedenen Perspektiven auf Probleme zu blicken.
                </p>
            </div>
            <div className="second-paragraph-container container">
                <img
                    className="image"
                    src="../../../public/images/placeholder/Hamburger.jpg"
                    alt=""
                />
                <p className="second-paragraph">
                    Unser Ziel ist es, benutzerfreundliche und ansprechende
                    Webseiten zu erstellen, die sowohl funktional als auch
                    ästhetisch ansprechend sind. Wir glauben an kontinuierliches
                    Lernen und streben danach, uns ständig weiterzuentwickeln
                    und neue Technologien und Methoden zu erlernen.
                </p>
            </div>
            <div className="third-paragraph-container container">
                <img
                    className="image"
                    src="../../../public/images/placeholder/Hamburger.jpg"
                    alt=""
                />
                <p className="third-paragraph">
                    Wir sind stolz darauf, unser finales Projekt präsentieren zu
                    können: eine vollständig funktionierende Webseite, die das
                    Ergebnis unserer harten Arbeit und unseres Engagements ist.
                    Wir hoffen, dass Sie unsere Webseite genauso sehr schätzen
                    wie wir ihre Entwicklung.
                </p>
            </div>
        </>
    );
};

export default About;
