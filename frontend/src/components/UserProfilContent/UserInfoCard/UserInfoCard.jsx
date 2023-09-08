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
        <div className="user-profile profile-card-container">
            <UserStatistic
                wantToRead={wantToRead}
                currentlyReading={currentlyReading}
                alreadyRead={alreadyRead}
                username={username}
                profileImage={profileImage}
            />
        </div>
    );
};
export default UserInfoCard;
