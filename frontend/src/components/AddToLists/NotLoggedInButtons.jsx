import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
const NotLoggedInButtons = ({ handleLoginClick }) => {
    return (
        <>
            <button
                className="book-actions-add-to-lists want-to-read"
                onClick={handleLoginClick}
            >
                Möchte ich lesen
            </button>
            <button
                onClick={handleLoginClick}
                className="book-actions-add-to-lists-dropdown"
            >
                {<FontAwesomeIcon icon={faChevronDown} />}
            </button>
        </>
    );
};

export default NotLoggedInButtons;
