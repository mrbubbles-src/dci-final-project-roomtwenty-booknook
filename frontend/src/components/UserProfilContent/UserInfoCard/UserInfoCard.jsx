import React from "react";
import "./UserInfoCard.scss";
import UserStatistic from "../../UserStatistic/UserStatistic";
const UserInfoCard = ({
    wantToRead,
    currentlyReading,
    alreadyRead,
    username,
    profileImage,
}) => {
    return (
        <section className="profile-card-container">
            <UserStatistic
                wantToRead={wantToRead}
                currentlyReading={currentlyReading}
                alreadyRead={alreadyRead}
                username={username}
                profileImage={profileImage}
            />
        </section>
    );
};
export default UserInfoCard;
