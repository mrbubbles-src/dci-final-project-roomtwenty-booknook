import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Test = () => {
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
            <ul>
                {bookData &&
                    bookData.items &&
                    bookData.items.map((book, index) => {
                        return (
                            <li key={index}>
                                {book.volumeInfo.title}{" "}
                                <Link>{book.selfLink}</Link>
                            </li>
                        );
                    })}
            </ul>
        </>
    );
};

export default Test;
