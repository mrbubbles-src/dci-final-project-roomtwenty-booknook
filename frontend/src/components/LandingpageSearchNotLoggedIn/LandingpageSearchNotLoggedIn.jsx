import React from "react";
import "./landingpageSearchNotLoggedIn.scss";
import { Link } from "react-router-dom";
import BookSearch from "../BookSearch/BookSearch";

const LandingpageSearchNotLoggedIn = () => {
    return (
        <section className="landingpage-search-section">
            <h3 className="landingpage-search-title">
                Probier unsere Büchersuche doch schon einmal aus
            </h3>
            <form action="#" className="landingpage-searchbar-form">
                <input
                    type="text"
                    name="landingpage-searchbar"
                    id="landingpage-searchbar"
                    placeholder="Harry Potter"
                />
                <input
                    type="submit"
                    id="landingpage-search-submit"
                    value="Suchen"
                />
            </form>
            <div className="landingpage-search-results-container">
                <BookSearch
                    classname="landingpage-search-book-cover"
                    amountShown={[0, 3]}
                />
                <Link
                    to={"https://www.google.de/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="landingpage-show-more-results"
                >
                    ...mehr
                </Link>
            </div>
        </section>
    );
};

export default LandingpageSearchNotLoggedIn;
