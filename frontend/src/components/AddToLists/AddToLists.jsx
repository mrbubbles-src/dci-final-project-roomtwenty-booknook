import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const AddToLists = ({ onButtonClick }) => {
    const serverURL = "http://localhost:3000/books/addBooks";
    // `${serverURL}currentlyReading`
    // `${serverURL}alreadyReadd`
    // `${serverURL}wantToRead`
    const handleButtonClick = (url) => {
        onButtonClick(url);
    };
    return (
        <div>
            <div className="book-actions-add-to-lists-container">
                <button
                    className="book-actions-add-to-lists want-to-read"
                    onClick={() => handleButtonClick(`${serverURL}/wantToRead`)}
                >
                    Möchte ich lesen
                </button>
                <button className="book-actions-add-to-lists-dropdown">
                    {<FontAwesomeIcon icon={faChevronDown} />}
                </button>
            </div>
        </div>
    );
};

export default AddToLists;
