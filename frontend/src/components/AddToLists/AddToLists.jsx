import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const AddToLists = ({}) => {
    return (
        <div>
            <div className="book-actions-add-to-lists-container">
                <button className="book-actions-add-to-lists want-to-read">
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
