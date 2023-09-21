import React, { useContext, useRef } from "react";
import "./LeseFortschritt.scss";
import { BookNookContext } from "../../../../context/BookNookProvider";

//wenn currently reading geupdatet wird, benutze modal und dann da drin in der card die erscheint kommt, das man das buch auf fertig gelesen setzen kann und auch die anzeige bearbeiten kann: seite 343 von 643 gelesen
const LeseFortschritt = ({ bookID, singlePageID, pageCount }) => {
    const {
        token,
        setCurrentPageProgress,
        readingGoalProgress,
        setReadingGoalProgress,
        setIsRead,
        isRead,
    } = useContext(BookNookContext);
    const inputElement = useRef();
    async function updateReadingChallengeCurrent() {
        const body = {
            readingChallengeCurrent: readingGoalProgress + 1,
        };
        try {
            const response = await fetch(
                "https://roomtwenty-booknook-backend.onrender.com/users/updateUser",
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(body),
                }
            );
            const responsemsg = await response.json();
            // console.log(responsemsg);
            setReadingGoalProgress(readingGoalProgress + 1);
        } catch (error) {
            throw new Error(error);
        }
    }
    async function updateCurrentPageInDBFetch() {
        const body = {
            type: "currentlyReading",
            book: bookID,
            currentPage: parseInt(inputElement.current.value),
        };
        try {
            const response = await fetch(
                "https://roomtwenty-booknook-backend.onrender.com/users/updateUser",
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(body),
                }
            );
            const responsemsg = await response.json();
            setIsRead(!isRead);
            // console.log(responsemsg);
        } catch (error) {
            throw new Error(error);
        }
    }
    async function bookReadFetch() {
        const body = {
            id: singlePageID,
        };

        try {
            const response = await fetch(
                "https://roomtwenty-booknook-backend.onrender.com/books/addBooks/alreadyRead",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(body),
                }
            );
            await updateReadingChallengeCurrent();
            setIsRead(!isRead);
            const responseJson = await response.json();
            // console.log(responseJson);
        } catch (error) {
            console.error(error);
        }
    }
    function handleUpdateCurrentPageNumber(e) {
        e.preventDefault();
        setCurrentPageProgress(parseInt(inputElement.current.value));

        if (parseInt(inputElement.current.value) !== pageCount) {
            return updateCurrentPageInDBFetch();
        } else {
            return bookReadFetch();
        }
    }

    function handleBookRead(e) {
        e.preventDefault();
        bookReadFetch();
    }
    return (
        <div className="lese-fortschritt-container">
            <h2 className="lese-fortschritt-title">
                Auf welcher Seite bist du?
            </h2>
            <div className="lese-fortschritt-input-container">
                <input
                    className="lese-fortschritt-input no-spinner"
                    type="number"
                    ref={inputElement}
                    placeholder="Seitenzahl"
                />
                <button
                    className="lese-fortschritt-aktualisieren-btn fortschritt-buttons"
                    onClick={handleUpdateCurrentPageNumber}
                >
                    <strong>Aktualisieren</strong>
                </button>
            </div>
            <button
                className="lese-fortschritt-fertig-btn fortschritt-buttons"
                onClick={handleBookRead}
            >
                <strong>Fertig gelesen</strong>
            </button>
        </div>
    );
};

export default LeseFortschritt;
