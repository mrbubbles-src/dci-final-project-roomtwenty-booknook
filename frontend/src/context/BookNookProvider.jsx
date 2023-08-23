import React, { useState, useEffect } from "react";

export const BookNookContext = React.createContext();

const BookNookProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(null);
    // const [userRating, setUserRating] = useState([]);
    // const [userRatingCount, setuserRatingCount] = useState(0);
    // buch suche spezifischer context start
    const [searchTerm, setSearchTerm] = useState(null);
    const [bookData, setBookData] = useState({});
    const [searchReadMore, setsearchReadMore] = useState(false);

    useEffect(() => {
        if (searchTerm !== null) {
            async function fetchData() {
                setIsLoading(true);
                const res = await fetch(
                    `http://localhost:3000/books/searchbooks?q=${searchTerm}`
                );
                const data = await res.json();
                setBookData(data);
                setIsLoading(false);
                setsearchReadMore(true);
            }
            fetchData();
        }
    }, [searchTerm]);
    // buch suche spezifischer context ende
    return (
        <BookNookContext.Provider
            value={{
                searchTerm,
                setSearchTerm,
                bookData,
                searchReadMore,
                setsearchReadMore,
                isLoading,
            }}
        >
            {children}
        </BookNookContext.Provider>
    );
};

export default BookNookProvider;
