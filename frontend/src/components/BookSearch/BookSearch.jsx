import React, { useState, useEffect } from "react";
import NoImage from "../../../public/images/various/no-image.png";

const BookSearch = ({ classname, amountShown }) => {
    const [bookData, setBookData] = useState({});
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=harrypotter&key=${
                    import.meta.env.VITE_BOOKS_API_KEY
                }`
            );
            const data = await res.json();
            setBookData(data);
        }
        fetchData();
    }, []);
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
