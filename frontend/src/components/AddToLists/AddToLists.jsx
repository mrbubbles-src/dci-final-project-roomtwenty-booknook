import React, { useContext, useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { BookNookContext } from "../../context/BookNookProvider";

const AddToLists = ({ onButtonClick, bookId }) => {
    const [isBookOnList, setIsBookOnList] = useState({
        wantToRead: false,
        currentlyReading: false,
        alreadyRead: false,
    });
    const { token, handleLoginClick } = useContext(BookNookContext);
    const [showAddToListModal, setShowAddToListModal] = useState(false);
    const serverURL = "http://localhost:3000";
    useEffect(() => {
        if (!token) {
            // console.log("es gibt kein token");
            return;
        } else {
            async function fetchIsBookOnLists(url) {
                try {
                    const response = await fetch(url, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                            bookID: bookId,
                        },
                    });
                    const data = await response.json();
                    setIsBookOnList({
                        wantToRead: data.wantToRead,
                        currentlyReading: data.currentlyReading,
                        alreadyRead: data.alreadyRead,
                    });
                } catch (error) {
                    console.error(error);
                }
            }
            fetchIsBookOnLists(`${serverURL}/users/isBookOnLists`);
        }
    }, []);
    const handleButtonClick = (url) => {
        onButtonClick(url);
    };

    const handleShowAddToListModal = () => setShowAddToListModal(true);
    const handleCloseAddToListModal = () => setShowAddToListModal(false);

    const handleDeleteFromLists = async (url) => {
        try {
            const response = await fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ bookID: bookId }),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            {token ? (
                <div className="book-actions-add-to-lists-container">
                    <button
                        className="book-actions-add-to-lists want-to-read"
                        onClick={() =>
                            handleButtonClick(
                                `${serverURL}/books/addBooks/wantToRead`
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
                    {showAddToListModal && (
                        <Modal onClose={handleCloseAddToListModal}>
                            <h2 className="add-to-lists-title">
                                Auf welche Liste möchtest du das Buch
                                hinzufügen?
                            </h2>
                            <button
                                className="book-actions-add-to-lists want-to-read"
                                onClick={() =>
                                    handleButtonClick(
                                        `${serverURL}/books/addBooks/wantToRead`
                                    )
                                }
                            >
                                Möchte ich lesen
                            </button>
                            <button
                                className="book-actions-add-to-lists currently-reading"
                                onClick={() =>
                                    handleButtonClick(
                                        `${serverURL}/books/addBooks/currentlyReading`
                                    )
                                }
                            >
                                Lese ich gerade
                            </button>{" "}
                            <button
                                className="book-actions-add-to-lists already-read"
                                onClick={() =>
                                    handleButtonClick(
                                        `${serverURL}/books/addBooks/alreadyRead`
                                    )
                                }
                            >
                                Habe ich schon gelesen
                            </button>
                            {/* machen das button zum löschen nur angezeigt wird wenn das buch auch der liste ist */}
                            <button
                                onClick={() =>
                                    handleDeleteFromLists(
                                        `${serverURL}/users/removeBookFromLists`
                                    )
                                }
                            >
                                Entferne das Buch von deinen Listen
                            </button>
                        </Modal>
                    )}{" "}
                </div>
            ) : (
                // wenn kein token verfügbar ist wird das hier gerendert
                // auf click wird login form geöffnet
                <div className="book-actions-add-to-lists-container">
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
                </div>
            )}
        </>
    );
};

export default AddToLists;
