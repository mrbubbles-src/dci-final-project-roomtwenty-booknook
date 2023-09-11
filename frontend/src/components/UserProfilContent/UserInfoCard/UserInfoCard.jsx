import React from "react";
import "./UserInfoCard.scss";
import UserStatistic from "../../UserStatistic/UserStatistic";
const UserInfoCard = ({ username, profileImage, readingChallengeCurrent }) => {
    return (
        <UserStatistic
            username={username}
            profileImage={profileImage}
            readingChallengeCurrent={readingChallengeCurrent}
        />
    );
};
export default UserInfoCard;
