import React, { useContext } from "react";
import NoImage from "../../../public/images/various/no-image.png";
import { BookNookContext } from "../../context/BookNookProvider";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const BookSearch = ({ amountShown }) => {
    const { bookData, isLoading } = useContext(BookNookContext);
    // const placeholderImageSmall =
    //     "http://books.google.com/books/content?id=9N8qdq07gswC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE73vt1p4GUsN69p0vcbzwOHdVmGLAI43rstkOVYSRKrbwQiYOVWZAzyAjEhOq7rRMR6N1O7a-0TJ474mZCoocveeclRb5gghJhvb4gjItpFusoVPudqlMJtqyxoXM4UBBRu0Hekn&source=gbs_api";
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
                            <a
                                className="card-image-anchor-tag"
                                href={`/buch/${book.id}`}
                            >
                                <img
                                    className="card-image"
                                    src={
                                        // placeholderImageSmall ||
                                        imageLinks?.thumbnail || NoImage
                                    }
                                    alt={title}
                                />
                            </a>
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
                                {textSnippet || "Keine beschreibung verfügbar"}
                                {textSnippet && (
                                    <a
                                        className="show-more-results"
                                        href={`/buch/${book.id}`}
                                    >
                                        {" "}
                                        ...mehr
                                    </a>
                                )}
                            </p>
                        </div>
                    );
                })}
        </>
    );
};

export default BookSearch;
