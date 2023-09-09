import React, { useContext } from "react";
import "./userstatistic.scss";
import FileUpload from "../FileUpload/FileUpload";
import NoImage from "../../../public/images/various/no-image.png";
import { BookNookContext } from "../../context/BookNookProvider";
const UserStatistic = ({
    wantToRead,
    currentlyReading,
    alreadyRead,
    username,
    profileImage,
}) => {
    const { profileImageUploadPreview } = useContext(BookNookContext);
    const serverURL = "http://localhost:3000";
    const Avatar = `${serverURL}${profileImage}`;
    const previewImage = profileImageUploadPreview.preview;
    return (
        <>
            <div className="user-statistic-profile-image-container">
                <label htmlFor="upload-button">
                    <img
                        src={previewImage || Avatar || NoImage}
                        alt="avatar"
                        width={"100px"}
                    />
                </label>
                <FileUpload />
            </div>
            <article className="user-statistic-rank">
                <h3 className="user-statistic-username">{username}</h3>
            </article>
            <article className="user-statistic-book-info-container">
                <p className="user-statistic-book-info-already-read">
                    <span className="user-statistic-already-read-count">
                        {alreadyRead.length}
                    </span>{" "}
                    {alreadyRead.length === 1
                        ? "bereits gelesenes Buch"
                        : "bereits gelesene Bücher"}
                </p>
                <p className="user-statistic-book-info-currently-reading">
                    <span className="user-statistic-currently-reading-count">
                        {currentlyReading.length}
                    </span>{" "}
                    {currentlyReading.length === 1
                        ? "aktuell lesendes Buch"
                        : "aktuell lesende Bücher"}
                </p>
                <p className="user-statistic-book-info-want-to-tread">
                    <span className="user-statistic-want-to-read-count">
                        {wantToRead.length}
                    </span>{" "}
                    {wantToRead.length === 1
                        ? "gewünschtes Buch"
                        : "gewünschte Bücher"}
                </p>
            </article>
        </>
    );
};

export default UserStatistic;
