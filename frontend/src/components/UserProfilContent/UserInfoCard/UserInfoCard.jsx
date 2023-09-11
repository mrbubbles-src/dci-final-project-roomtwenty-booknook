import React from "react";
import "./UserInfoCard.scss";
import UserStatistic from "../../UserStatistic/UserStatistic";
const UserInfoCard = ({
    wantToRead,
    currentlyReading,
    alreadyRead,
    username,
    profileImage,
    readingChallengeCurrent,
    readingChallengeMax,
}) => {
    return (
        <UserStatistic
            username={username}
            profileImage={profileImage}
            readingChallengeCurrent={readingChallengeCurrent}
            readingChallengeMax={readingChallengeMax}
        />
    );
};
export default UserInfoCard;
