import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// modal bauen um daten an die entsprechenden routen zu schicken
// aktuell verfügbares funktioniert

const AddToLists = ({ onButtonClick }) => {
    const [showAddToListModal, setShowAddToListModal] = useState(false);
    const serverURL = "http://localhost:3000/books/addBooks";
    // `${serverURL}currentlyReading`
    // `${serverURL}alreadyReadd`
    // `${serverURL}wantToRead`
    const handleButtonClick = (url) => {
        onButtonClick(url);
    };

    const handleShowAddToListModal = () => setShowAddToListModal(true);
    const handleCloseAddToListModal = () => setShowAddToListModal(false);
    const handleDeleteFromLists = () => {
        //
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
                <button
                    onClick={handleShowAddToListModal}
                    className="book-actions-add-to-lists-dropdown"
                >
                    {<FontAwesomeIcon icon={faChevronDown} />}
                </button>
                {showAddToListModal && (
                    <Modal onClose={handleCloseAddToListModal}>
                        <button
                            className="book-actions-add-to-lists want-to-read"
                            onClick={() =>
                                handleButtonClick(`${serverURL}/wantToRead`)
                            }
                        >
                            Möchte ich lesen
                        </button>
                        <button
                            className="book-actions-add-to-lists currently-reading"
                            onClick={() =>
                                handleButtonClick(
                                    `${serverURL}/currentlyReading`
                                )
                            }
                        >
                            Lese ich gerade
                        </button>{" "}
                        <button
                            className="book-actions-add-to-lists already-read"
                            onClick={() =>
                                handleButtonClick(`${serverURL}/alreadyRead`)
                            }
                        >
                            Habe ich schon gelesen
                        </button>
                        <button>Entferne das Buch von deinen Listen</button>
                    </Modal>
                )}{" "}
            </div>
        </div>
    );
};

export default AddToLists;
