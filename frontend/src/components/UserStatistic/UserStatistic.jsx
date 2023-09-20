import React, { useContext, useState } from "react";
import "./userstatistic.scss";
import FileUpload from "../FileUpload/FileUpload";
import NoImage from "../../../public/images/various/no-image.png";
import { BookNookContext } from "../../context/BookNookProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import LeseChallenge from "../LeseChallenge/LeseChallenge";
import Modal from "../Modal/Modal";
import LevelExpBar from "../LevelExpBar/LevelExpBar";

const UserStatistic = ({
    username,
    profileImage,
    readingChallengeCurrent,
    alreadyRead,
}) => {
    const { profileImageUploadPreview, readingGoal } =
        useContext(BookNookContext);
    const serverURL = "http://localhost:3000";
    const Avatar = `${serverURL}${profileImage}`;
    const previewImage = profileImageUploadPreview.preview;
    const [showLeseChallengeModal, setShowLeseChallengeModal] = useState(false);
    const handleShowLeseChallengeModal = () => setShowLeseChallengeModal(true);
    const handleCloseLeseChallengeModal = () =>
        setShowLeseChallengeModal(false);
    const alreadyReadLength = alreadyRead.length;

    return (
        <>
            <div className="user-infocard-container">
                {/* GRID 1 (BILD) */}
                <div className="grid-container-1">
                    <div className="user-infocard-container-image">
                        <label htmlFor="upload-button">
                            <img
                                className="user-infocard-container-image-avatar"
                                src={previewImage || Avatar || NoImage}
                                alt="avatar"
                            />
                        </label>
                        <FileUpload />
                    </div>
                </div>
                {/* GRID 2 (Rechte Spalte) */}
                <div className="grid-container-2">
                    {/* USERNAME */}
                    <div className="username-container">
                        <h3 className="username-container-name">{username}</h3>
                        <span className="username-container-level-number">
                            <strong>
                                Level: {1 + Math.floor(alreadyReadLength / 3)}
                            </strong>
                        </span>
                    </div>
                    {/* LEVEL COMPONENT */}
                    <div className="user-infocard-container-level">
                        <LevelExpBar
                            xpProzent={(alreadyReadLength % 3) * 33.3 || 1}
                        />
                        <p className="user-infocard-container-level-xp-percent">
                            <strong>
                                Levelfortschritt:{" "}
                                <span className="user-infocard-container-level-xp-percent-count">
                                    {Math.floor(
                                        (alreadyReadLength % 3) * 33.3 || 1
                                    )}
                                </span>{" "}
                                %
                            </strong>
                        </p>
                    </div>
                    {/* CHALLENGE, i guess?! */}
                    <article className="user-statistic-challenge-container">
                        <h4 className="user-statistic-challenge-container-challenge-header">
                            Jahres-Lese-Challenge
                        </h4>
                        <p className="user-statistic-challenge-container-challenge-body">
                            Bereits{" "}
                            <span className="user-statistic-challenge-container-challenge-body-user-statistic-number">
                                <strong>
                                    {readingChallengeCurrent &&
                                        readingChallengeCurrent}
                                </strong>
                            </span>{" "}
                            {readingChallengeCurrent === 1 ? "Buch" : "Bücher"}{" "}
                            {readingGoal === 1 ? "vom" : "von"} geplanten{" "}
                            <span className="user-statistic-challenge-container-challenge-body-user-statistic-number">
                                <strong>{readingGoal && readingGoal} </strong>
                            </span>
                            {readingGoal === 1 ? "Buch" : "Büchern"} gelesen{" "}
                            <span>
                                <FontAwesomeIcon
                                    className="pencil-icon"
                                    icon={faPencil}
                                    onClick={handleShowLeseChallengeModal}
                                />
                            </span>
                        </p>
                        {showLeseChallengeModal && (
                            <Modal onClose={handleCloseLeseChallengeModal}>
                                <LeseChallenge />
                            </Modal>
                        )}
                    </article>
                </div>
            </div>
        </>
    );
};

export default UserStatistic;
