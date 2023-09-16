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
    xpProzent,
    userLevel,
    alreadyReadLength,
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

    return (
        <>
            <div className="user-statistics-container">
                <label htmlFor="upload-button">
                    <img
                        className="avatar"
                        src={previewImage || Avatar || NoImage}
                        alt="avatar"
                        width={"100px"}
                    />
                </label>
                <FileUpload />

                <div className="level-container">
                    <p className="user-level">
                        {1 + Math.floor(alreadyReadLength / 3)}
                    </p>
                    <LevelExpBar
                        xpProzent={(alreadyReadLength % 3) * 33.3 || 1}
                    />
                </div>
                <article className="user-statistic-challenge-container">
                    <h3 className="user-statistic-username">{username}</h3>

                    <h4 className="challenge-header">Jahres-Lese-Challenge</h4>
                    <p className="challenge-body">
                        Bereits{" "}
                        <span className="user-statistic-number">
                            {readingChallengeCurrent && readingChallengeCurrent}
                        </span>{" "}
                        {readingChallengeCurrent === 1 ? "Buch" : "Bücher"}{" "}
                        {readingGoal === 1 ? "vom" : "von"} geplanten{" "}
                        <span className="user-statistic-number">
                            {readingGoal && readingGoal}{" "}
                        </span>
                        {readingGoal === 1 ? "Buch" : "Büchern"} gelesen{" "}
                        <span>
                            <FontAwesomeIcon
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
        </>
    );
};

export default UserStatistic;
