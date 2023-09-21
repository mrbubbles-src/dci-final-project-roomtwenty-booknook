import React, { useState } from "react";
// import { useUpdateEffect } from "react-use";
import "./UserInfoCard.scss";
// import LevelExpBar from "../../LevelExpBar/LevelExpBar";
import UserStatistic from "../../UserStatistic/UserStatistic";
// import { BookNookContext } from "../../../context/BookNookProvider";
// import { faHand } from "@fortawesome/free-solid-svg-icons";

const UserInfoCard = ({
    readingRank,
    alreadyRead,
    username,
    profileImage,
    readingChallengeCurrent,
    readingLevel,
}) => {
    const [userLevel, setUserLevel] = useState(readingLevel);
    return (
        <UserStatistic
            username={username}
            profileImage={profileImage}
            readingChallengeCurrent={readingChallengeCurrent}
            userLevel={userLevel}
            alreadyRead={alreadyRead}
        />
    );
};

export default UserInfoCard;
