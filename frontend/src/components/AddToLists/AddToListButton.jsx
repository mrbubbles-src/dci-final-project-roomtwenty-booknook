import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
const AddToListButton = ({
    isBookOnList,
    serverURL,
    handleButtonClick,
    handleShowAddToListModal,
}) => {
    const wantToRead = isBookOnList.wantToRead;
    const currentlyReading = isBookOnList.currentlyReading;
    const alreadyRead = isBookOnList.alreadyRead;
    if (wantToRead) {
        return (
            <>
                <button
                    className="book-actions-add-to-lists want-to-read"
                    onClick={() =>
                        handleButtonClick(
                            `${serverURL}/books/addBooks/wantToRead`,
                            "wantToRead"
                        )
                    }
                >
                    Möchte ich lesen
                </button>
                <button
                    onClick={handleShowAddToListModal}
                    className="book-actions-add-to-lists-dropdown"
                >
                    {<FontAwesomeIcon icon={faChevronDown} />}
                </button>
            </>
        );
    } else if (currentlyReading) {
        return (
            <>
                <button
                    className="book-actions-add-to-lists currently-reading"
                    onClick={() =>
                        handleButtonClick(
                            `${serverURL}/books/addBooks/currentlyReading`,
                            "currentlyReading"
                        )
                    }
                >
                    Lese ich gerade
                </button>
                <button
                    onClick={handleShowAddToListModal}
                    className="book-actions-add-to-lists-dropdown"
                >
                    {<FontAwesomeIcon icon={faChevronDown} />}
                </button>
            </>
        );
    } else if (alreadyRead) {
        return (
            <>
                <button
                    className="book-actions-add-to-lists already-read"
                    onClick={() =>
                        handleButtonClick(
                            `${serverURL}/books/addBooks/alreadyRead`,
                            "alreadyRead"
                        )
                    }
                >
                    Habe ich schon gelesen
                </button>
                <button
                    onClick={handleShowAddToListModal}
                    className="book-actions-add-to-lists-dropdown"
                >
                    {<FontAwesomeIcon icon={faChevronDown} />}
                </button>
            </>
        );
    } else {
        return (
            <>
                <button
                    className="book-actions-add-to-lists want-to-read"
                    onClick={() =>
                        handleButtonClick(
                            `${serverURL}/books/addBooks/wantToRead`,
                            "wantToRead"
                        )
                    }
                >
                    Möchte ich lesen
                </button>
                <button
                    onClick={handleShowAddToListModal}
                    className="book-actions-add-to-lists-dropdown"
                >
                    {<FontAwesomeIcon icon={faChevronDown} />}
                </button>
            </>
        );
    }
};

export default AddToListButton;
