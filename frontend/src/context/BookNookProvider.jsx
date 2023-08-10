import React from "react";

// context provider: rohling vorhanden, bei bedarf befüllen ansonsten am ende löschen.

export const BookNookContext = React.createContext();

const BookNookProvider = ({ children }) => {
    return (
        <BookNookContext.Provider value={{}}>
            {children}
        </BookNookContext.Provider>
    );
};

export default BookNookProvider;
