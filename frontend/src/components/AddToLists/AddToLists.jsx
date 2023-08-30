import React, { useContext, useState } from "react";
import Modal from "../../components/Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { BookNookContext } from "../../context/BookNookProvider";

const AddToLists = ({ onButtonClick, bookId }) => {
    const { token } = useContext(BookNookContext);
    const [showAddToListModal, setShowAddToListModal] = useState(false);
    const serverURL = "http://localhost:3000";

    // `currentlyReading`
    // `alreadyReadd`
    // `wantToRead`
    // `${serverURL}/removeBookFromList`

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
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
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
                            Auf welche Liste möchtest du Das buch hinzufügen?
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
        </div>
    );
};

export default AddToLists;
