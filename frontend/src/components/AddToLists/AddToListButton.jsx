import React from "react";

const AddToListButton = ({ isBookOnList, serverURL, handleButtonClick }) => {
    const wantToRead = isBookOnList.wantToRead;
    const currentlyReading = isBookOnList.currentlyReading;
    const alreadyRead = isBookOnList.alreadyRead;
    if (wantToRead) {
        return (
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
        );
    } else if (currentlyReading) {
        return (
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
        );
    } else if (alreadyRead) {
        return (
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
        );
    } else {
        return (
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
        );
    }
};

export default AddToListButton;
