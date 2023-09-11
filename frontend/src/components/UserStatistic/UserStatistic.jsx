import React, { useContext, useState } from "react";
import "./userstatistic.scss";
import FileUpload from "../FileUpload/FileUpload";
import NoImage from "../../../public/images/various/no-image.png";
import { BookNookContext } from "../../context/BookNookProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import LeseChallenge from "../LeseChallenge/LeseChallenge";
import Modal from "../Modal/Modal";
const UserStatistic = ({
    wantToRead,
    currentlyReading,
    alreadyRead,
    username,
    profileImage,
    readingChallengeCurrent,
    readingChallengeMax,
}) => {
    const { profileImageUploadPreview } = useContext(BookNookContext);
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
                <p>hier könnte ihre xp leiste stehen</p>
            </article>
            <article className="user-statistic-info-container">
                <h4>Jahres-Lese-Challenge</h4>
                <p>
                    Bereits{" "}
                    <span className="user-statistic-number">
                        {readingChallengeCurrent && readingChallengeCurrent}
                    </span>{" "}
                    {readingChallengeCurrent === 1 ? "Buch" : "Bücher"}{" "}
                    {readingChallengeMax === 1 ? "vom" : "von"} geplanten{" "}
                    <span className="user-statistic-number">
                        {readingChallengeMax && readingChallengeMax}{" "}
                    </span>
                    {readingChallengeMax === 1 ? "Buch" : "Büchern"} gelesen{" "}
                    <span>
                        <FontAwesomeIcon
                            icon={faPencil}
                            onClick={handleShowLeseChallengeModal}
                        />
                        {showLeseChallengeModal && (
                            <Modal onClose={handleCloseLeseChallengeModal}>
                                <LeseChallenge />
                            </Modal>
                        )}
                    </span>
                </p>
                {/* <p className="user-statistic-book-info-already-read">
                    <span className="user-statistic-number">
                        {alreadyRead.length}
                    </span>{" "}
                    {alreadyRead.length === 1
                        ? "bereits gelesenes Buch"
                        : "bereits gelesene Bücher"}
                </p>
                <p className="user-statistic-book-info-currently-reading">
                    <span className="user-statistic-number">
                        {currentlyReading.length}
                    </span>{" "}
                    {currentlyReading.length === 1
                        ? "aktuell lesendes Buch"
                        : "aktuell lesende Bücher"}
                </p>
                <p className="user-statistic-book-info-want-to-tread">
                    <span className="user-statistic-number">
                        {wantToRead.length}
                    </span>{" "}
                    {wantToRead.length === 1
                        ? "gewünschtes Buch"
                        : "gewünschte Bücher"}
                </p> */}
            </article>
        </>
    );
};

export default UserStatistic;
