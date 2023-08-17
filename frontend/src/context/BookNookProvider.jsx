import React, { useState } from "react";

export const BookNookContext = React.createContext();

const BookNookProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <BookNookContext.Provider value={{ searchTerm, setSearchTerm }}>
            {children}
        </BookNookContext.Provider>
    );
};

export default BookNookProvider;
