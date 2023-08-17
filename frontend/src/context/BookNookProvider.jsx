import React, { useState, useEffect } from "react";

export const BookNookContext = React.createContext();

const BookNookProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(null);
    // buch suche spezifischer context start
    const [userInput, setUserInput] = useState("");
    const [searchTerm, setSearchTerm] = useState("harry potter");
    const [bookData, setBookData] = useState({});
    const [searchReadMore, setsearchReadMore] = useState(false);

    function handleSearchSubmit(dataResponse) {
        setBookData(dataResponse);
    }

    useEffect(() => {
        if (searchTerm !== "") {
            async function fetchData() {
                setIsLoading(true);
                const res = await fetch(
                    `http://localhost:3000/books/searchbooks?q=${searchTerm}`
                );
                const data = await res.json();
                handleSearchSubmit(data);
                setUserInput("");
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
                userInput,
                setUserInput,
            }}
        >
            {children}
        </BookNookContext.Provider>
    );
};

export default BookNookProvider;
