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
            <div className="user-statistic-avatar-container">
                <label htmlFor="upload-button">
                    <img
                        className="avatar"
                        src={previewImage || Avatar || NoImage}
                        alt="avatar"
                        width={"100px"}
                    />
                </label>
                <FileUpload />
            </div>
            <article className="user-statistic-rank-container">
                <h3 className="user-statistic-username">{username}</h3>
                <LevelExpBar xpProzent={xpProzent} />
            </article>
            <article className="user-statistic-info-container">
                <h4>Jahres-Lese-Challenge</h4>
                <p>
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
        </>
    );
};

export default UserStatistic;
