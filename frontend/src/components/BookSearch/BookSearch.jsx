import React, { useContext } from "react";
import NoImage from "../../../public/images/various/no-image.png";
import { BookNookContext } from "../../context/BookNookProvider";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { Link } from "react-router-dom";

const BookSearch = ({ amountShown }) => {
    const { bookData, isLoading } = useContext(BookNookContext);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <>
            {bookData &&
                bookData.items &&
                bookData.items.slice(...amountShown).map((book, index) => {
                    const { title, authors, imageLinks } =
                        book.volumeInfo || {};
                    const { textSnippet } = book.searchInfo || {};
                    return (
                        <div className="card-container" key={index}>
                            <Link
                                className="card-image-anchor-tag"
                                to={`/buch/${book.id}`}
                            >
                                <img
                                    className="card-image"
                                    src={imageLinks?.thumbnail || NoImage}
                                    alt={title}
                                />
                            </Link>
                            <h4 className="card-title">
                                {title || "Titel nicht verfügbar"}
                            </h4>
                            <h5 className="card-author">
                                von{" "}
                                {(authors &&
                                    authors.join(
                                        authors.length === 1 ? "" : " & "
                                    )) ||
                                    "Unbekannter Autor"}
                            </h5>
                            <p className="card-infotext">
                                {textSnippet
                                    ?.replace(/<\/?[^>]+(>|$)/g, "")
                                    .replace("&quot;", "") ||
                                    "Keine beschreibung verfügbar"}
                                {textSnippet && (
                                    <Link
                                        className="show-more-results"
                                        to={`/buch/${book.id}`}
                                    >
                                        {" "}
                                        ...mehr
                                    </Link>
                                )}
                            </p>
                        </div>
                    );
                })}
        </>
    );
};

export default BookSearch;
