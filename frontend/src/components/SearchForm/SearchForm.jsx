import React, { useContext } from "react";
import "./SearchForm.scss";
import { Link } from "react-router-dom";
import BookSearch from "../BookSearch/BookSearch";
import { BookNookContext } from "../../context/BookNookProvider";

const SearchForm = ({ title }) => {
    const { searchTerm, setSearchTerm } = useContext(BookNookContext);

    return (
        <section className="search-section">
            <h3 className="search-title">{title}</h3>
            <form action="#" className="searchbar-form">
                <input
                    type="text"
                    name="searchbar"
                    id="searchbar"
                    placeholder="Harry Potter"
                />
                <input type="submit" id="search-submit" value="Suchen" />
            </form>
            <div className="search-results-container">
                <BookSearch
                    classname="search-book-cover"
                    amountShown={[0, 3]}
                />
                <Link
                    to={"https://www.google.de/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="show-more-results"
                >
                    ...mehr
                </Link>
            </div>
        </section>
    );
};

export default SearchForm;
