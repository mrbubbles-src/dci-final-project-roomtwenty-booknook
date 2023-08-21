import React, { useContext, useState } from "react";
import "./searchForm.scss";
import { Link } from "react-router-dom";
import BookSearch from "../BookSearch/BookSearch";
import { BookNookContext } from "../../context/BookNookProvider";

const SearchForm = ({
    title,
    formClassName,
    searchBarId,
    searchSubmitId,
    amountShown,
}) => {
    const { setSearchTerm, searchReadMore } = useContext(BookNookContext);
    const [userInput, setUserInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchTerm(userInput);
    };
    return (
        <section className="search-section">
            <h3 className="search-title">{title}</h3>
            <form action="#" onSubmit={handleSubmit} className={formClassName}>
                <input
                    type="text"
                    name="searchbar"
                    id={searchBarId}
                    placeholder="z. B. Harry Potter"
                    value={userInput}
                    onChange={(event) => setUserInput(event.target.value)}
                />
                <input type="submit" id={searchSubmitId} value="Suchen" />
            </form>
            <div className="search-results-container">
                <BookSearch amountShown={amountShown} />
                <Link
                    to={"/suche"}
                    className={searchReadMore ? "show-more-results" : "hidden"}
                >
                    Mehr Suchergebnisse
                </Link>
            </div>
        </section>
    );
};

export default SearchForm;
