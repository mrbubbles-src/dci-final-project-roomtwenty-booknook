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
                        <a href={book.selfLink} key={index}>
                            {
                                <img
                                    key={index + 1}
                                    className={classname}
                                    src={
                                        book.volumeInfo.imageLinks?.thumbnail ||
                                        NoImage
                                    }
                                    alt={book.volumeInfo.title}
                                />
                            }
                        </a>
                    );
                })}
        </>
    );
};

export default BookSearch;
