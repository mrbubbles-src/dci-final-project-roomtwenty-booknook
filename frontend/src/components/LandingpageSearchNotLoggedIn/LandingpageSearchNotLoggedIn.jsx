import React from "react";
import PlaceholderSearchImg1 from "../../../public/images/placeholder/potter1.jpeg";
import PlaceholderSearchImg2 from "../../../public/images/placeholder/potter1alt.jpg";
import "./landingpageSearchNotLoggedIn.scss";
const LandingpageSearchNotLoggedIn = () => {
    return (
        // <div className="main">
        <section className="landingpage-search-section">
            <h3 className="landingpage-search-title">
                Probier unsere Büchersuche doch schon einmal aus
            </h3>
            <form action="#" className="landingpage-searchbar-form">
                <input
                    type="text"
                    name="landingpage-searchbar"
                    id="landingpage-searchbar"
                    placeholder="Harry Potter und der Stein der Weisen"
                />
                <input
                    type="submit"
                    id="landingpage-search-submit"
                    value="Suchen"
                />
            </form>
            <div className="landingpage-search-results-container">
                <img
                    className="landingpage-search-book-cover"
                    src={PlaceholderSearchImg1}
                    alt="Buch cover"
                />
                <img
                    className="landingpage-search-book-cover"
                    src={PlaceholderSearchImg2}
                    alt="Buch cover"
                />
                <img
                    className="landingpage-search-book-cover"
                    src={PlaceholderSearchImg1}
                    alt="Buch cover"
                />
            </div>
        </section>
        // </div>
    );
};

export default LandingpageSearchNotLoggedIn;
