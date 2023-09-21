import React, { useContext, useEffect, useState } from "react";
import "./addToLists.scss";
import Modal from "../../components/Modal/Modal";
import { BookNookContext } from "../../context/BookNookProvider";
import AddToListButton from "./AddToListButton";
import ModalButtons from "./ModalButtons";
import NotLoggedInButtons from "./NotLoggedInButtons";

const AddToLists = ({ onButtonClick, bookId }) => {
    const [isBookOnList, setIsBookOnList] = useState({
        wantToRead: false,
        currentlyReading: false,
        alreadyRead: false,
    });
    const wantToRead = isBookOnList.wantToRead;
    const currentlyReading = isBookOnList.currentlyReading;
    const alreadyRead = isBookOnList.alreadyRead;
    const { token, handleLoginClick } = useContext(BookNookContext);
    const [showAddToListModal, setShowAddToListModal] = useState(false);
    const serverURL = "https://roomtwenty-booknook-backend.onrender.com";
    useEffect(() => {
        if (!token) {
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
    const handleButtonClick = (url, listName) => {
        onButtonClick(url);
        setIsBookOnList({
            wantToRead: listName === "wantToRead",
            currentlyReading: listName === "currentlyReading",
            alreadyRead: listName === "alreadyRead",
        });
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
            setIsBookOnList({
                wantToRead: false,
                currentlyReading: false,
                alreadyRead: false,
            });
            // console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="book-actions-add-to-lists-container">
            {token ? (
                <>
                    <AddToListButton
                        isBookOnList={isBookOnList}
                        serverURL={serverURL}
                        handleButtonClick={handleButtonClick}
                        handleShowAddToListModal={handleShowAddToListModal}
                    />
                </>
            ) : (
                <>
                    <NotLoggedInButtons handleLoginClick={handleLoginClick} />
                </>
            )}
            {showAddToListModal && (
                <Modal onClose={handleCloseAddToListModal}>
                    <aside className="add-to-lists-modal-container">
                        <h2 className="add-to-lists-modal-title">
                            Auf welche Liste möchtest du das Buch hinzufügen?
                        </h2>
                        <ModalButtons
                            isBookOnList={isBookOnList}
                            serverURL={serverURL}
                            handleButtonClick={handleButtonClick}
                        />
                        {/* machen das button zum löschen nur angezeigt wird wenn das buch auch der liste ist */}
                        {wantToRead || currentlyReading || alreadyRead ? (
                            <button
                                className="book-actions-remove-from-list remove-btn-modal"
                                onClick={() =>
                                    handleDeleteFromLists(
                                        `${serverURL}/users/removeBookFromLists`
                                    )
                                }
                            >
                                Entferne das Buch von deinen Listen
                            </button>
                        ) : (
                            <></>
                        )}
                    </aside>
                </Modal>
            )}
        </div>
    );
};

export default AddToLists;
