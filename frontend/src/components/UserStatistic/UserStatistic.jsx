import React from "react";
import "./userstatistic.scss";
const UserStatistic = ({
    wantToRead,
    currentlyReading,
    alreadyRead,
    username,
    profileImage,
}) => {
    const serverURL = "http://localhost:3000";
    const Avatar = `${serverURL}${profileImage}`;
    return (
        <>
            <div className="user-statistic-profile-image-container">
                <img src={Avatar} alt="avatar" width={"100px"} />
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
