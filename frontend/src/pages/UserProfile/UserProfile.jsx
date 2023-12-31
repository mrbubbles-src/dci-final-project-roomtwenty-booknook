import React, { useContext, useEffect, useState } from "react";
import "./userprofile.scss";
import UserInfoCard from "../../components/UserProfilContent/UserInfoCard/UserInfoCard";
import CurrentlyReadingCard from "../../components/UserProfilContent/CurrentlyReadingCard/CurrentlyReadingCard";
import ReadCard from "../../components/UserProfilContent/ReadCard/ReadCard";
import WantToReadCard from "../../components/UserProfilContent/WantToReadCard/WantToReadCard";
import { BookNookContext } from "../../context/BookNookProvider";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const UserProfile = () => {
    const backEndUrl = import.meta.env.VITE_BACKEND_URL;
    const { token, setReadingGoal, setReadingGoalProgress, isRead } =
        useContext(BookNookContext);
    const [userdata, setUserdata] = useState(null);
    const [isLoadingUserData, setIsLoadingUserData] = useState(true);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${backEndUrl}/users/userdata`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await response.json();
            // console.log("data response", data);
            setUserdata(data);
            setReadingGoal(data.readingChallengeMax);
            setReadingGoalProgress(data.readingChallengeCurrent);
            setIsLoadingUserData(false);
        }
        fetchData();
    }, [isRead]);
    if (isLoadingUserData) {
        return <LoadingSpinner />;
    }
    // route um user einträge zu updaten: ${backEndUrl}/users/updateUser
    // wenn currentPage geupdated werden muss, muss das in den daten stehen die gesendet werden:
    // {
    // "type":"currentlyReading",
    // "book": "die id die unter den key book im buch steht",
    // "currentPage": der neue wert als zahl, NICHT als string
    // }

    // wenn irgendwas anderes am user geupdated werden muss muss das stehen:
    // {
    // "name des eintrags. zb email": "neuer wert"
    // }
    //Schema infos
    const {
        username,
        readingRank,
        readingLevel,
        readingChallenge,
        profileImage,
        wantToRead,
        currentlyReading,
        alreadyRead,
        readingChallengeMax,
        readingChallengeCurrent,
    } = userdata || {};

    return (
        <div className="user-profile-container">
            <div className="user-profile-card user-statistic-container">
                <UserInfoCard
                    readingRank={readingRank}
                    alreadyRead={alreadyRead}
                    username={username}
                    profileImage={profileImage}
                    readingChallengeCurrent={readingChallengeCurrent}
                    readingLevel={readingLevel}
                />
            </div>
            <h4 className="user-profile-title">
                Liest derzeit{" "}
                <span className="user-profile-title-number">
                    {currentlyReading.length}
                </span>{" "}
                {currentlyReading.length === 1 ? "Buch" : "Bücher"}
            </h4>
            <div className="user-profile-card">
                <CurrentlyReadingCard currentlyReading={currentlyReading} />
            </div>{" "}
            <h4 className="user-profile-title">
                Möchte{" "}
                <span className="user-profile-title-number">
                    {wantToRead.length}
                </span>{" "}
                {wantToRead.length === 1 ? "Buch" : "Bücher"} lesen
            </h4>
            <div className="user-profile-card">
                <WantToReadCard wantToRead={wantToRead} />
            </div>
            <h4 className="user-profile-title">
                Hat bereits{" "}
                <span className="user-profile-title-number">
                    {alreadyRead.length}
                </span>{" "}
                {alreadyRead.length === 1 ? "Buch" : "Bücher"} gelesen
            </h4>
            <div className="user-profile-card">
                <ReadCard alreadyRead={alreadyRead} />
            </div>
        </div>
    );
};

export default UserProfile;
