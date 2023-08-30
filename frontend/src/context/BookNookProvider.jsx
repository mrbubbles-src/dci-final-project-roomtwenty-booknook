import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

export const BookNookContext = React.createContext();

const BookNookProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(null);
    const [token, setToken] = useState(null);
    // const [userRating, setUserRating] = useState([]);
    // const [userRatingCount, setuserRatingCount] = useState(0);
    // buch suche spezifischer context start
    const [searchTerm, setSearchTerm] = useState(null);
    const [bookData, setBookData] = useState({});
    const [searchReadMore, setsearchReadMore] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    useEffect(() => {
        setToken(Cookies.get("jwtToken"));
        // console.log("cookie.get", Cookies.get("gibts nicht"));
    }, []);
    return (
        <BookNookContext.Provider
            value={{
                searchTerm,
                setSearchTerm,
                bookData,
                searchReadMore,
                setsearchReadMore,
                isLoading,
                token,
                isLoggedIn,
                setIsLoggedIn,
            }}
        >
            {children}
        </BookNookContext.Provider>
    );
};

export default BookNookProvider;
