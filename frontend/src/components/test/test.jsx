import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Test = () => {
    const [bookData, setBookData] = useState({});
    // const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(
                "https://www.googleapis.com/books/v1/volumes?q=harrypotter&key=AIzaSyDMmyHDYPAYZvCCgk40pWRufmxv2bZ_IOs"
            );
            const data = await res.json();
            // console.log("data", data);
            setBookData(data);
            // setLoading(false);
        }
        fetchData();
    }, []);
    // console.log("bookdata", bookData);
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
