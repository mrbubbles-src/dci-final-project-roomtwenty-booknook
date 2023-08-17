import React, { useContext } from "react";
import NoImage from "../../../public/images/various/no-image.png";
import { BookNookContext } from "../../context/BookNookProvider";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const BookSearch = ({ classname, amountShown }) => {
    const { bookData, isLoading } = useContext(BookNookContext);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <>
            {bookData &&
                bookData.items &&
                bookData.items.slice(...amountShown).map((book, index) => {
                    return (
                        <div className="card-container" key={index}>
                            <a href={book.selfLink}>
                                {
                                    <img
                                        className={classname}
                                        src={
                                            book.volumeInfo.imageLinks
                                                ?.thumbnail || NoImage
                                        }
                                        alt={book.volumeInfo.title}
                                    />
                                }
                            </a>
                            <h4>{book.volumeInfo.title}</h4>
                            <h5>
                                by{" "}
                                {book.volumeInfo.authors.join(
                                    book.volumeInfo.authors.length === 1
                                        ? ""
                                        : " & "
                                )}
                            </h5>
                            <p>
                                {book.searchInfo.textSnippet}
                                <a href={book.selfLink}> ...mehr</a>
                            </p>
                        </div>
                    );
                })}
        </>
    );
};

export default BookSearch;
