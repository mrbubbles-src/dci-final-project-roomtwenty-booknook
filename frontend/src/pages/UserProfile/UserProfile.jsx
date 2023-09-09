import React, { useContext, useEffect, useState } from "react";
import LeseChallenge from "../../components/LeseChallenge/LeseChallenge";
import "./userprofile.scss";
import UserInfoCard from "../../components/UserProfilContent/UserInfoCard/UserInfoCard";
import CurrentlyReadingCard from "../../components/UserProfilContent/CurrentlyReadingCard/CurrentlyReadingCard";
import ReadCard from "../../components/UserProfilContent/ReadCard/ReadCard";
import WantToReadCard from "../../components/UserProfilContent/WantToReadCard/WantToReadCard";
import { BookNookContext } from "../../context/BookNookProvider";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
const UserProfile = () => {
    const { token } = useContext(BookNookContext);
    const [userdata, setUserdata] = useState(null);
    const [isLoadingUserData, setIsLoadingUserData] = useState(true);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                `http://localhost:3000/users/userdata`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const data = await response.json();
            console.log("data response", data);
            setUserdata(data);
            setIsLoadingUserData(false);
        }
        fetchData();
    }, []);
    if (isLoadingUserData) {
        return <LoadingSpinner />;
    }
    // route um user einträge zu updaten: http://localhost:3000/users/updateUser
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

    const {
        username,
        readingRank,
        readingLevel,
        readingChallenge,
        profileImage,
        wantToRead,
        currentlyReading,
        alreadyRead,
    } = userdata || {};

    // console.log("username", username);
    // console.log("readingRank", readingRank);
    // console.log("readingLevel", readingLevel);
    // console.log("readingChallenge", readingChallenge);
    // console.log("profileImage", profileImage);
    // console.log("wantToRead", wantToRead);
    // console.log("currentlyReading", currentlyReading);
    // console.log("alreadyRead", alreadyRead);

    return (
        <>
            <div className="user-profile-card user-statistic">
                <UserInfoCard
                    wantToRead={wantToRead}
                    currentlyReading={currentlyReading}
                    alreadyRead={alreadyRead}
                    username={username}
                    profileImage={profileImage}
                />
            </div>
            <div className="user-profile-card currently-reading">
                <CurrentlyReadingCard />
            </div>
            <div className="user-profile-card reading-challenge">
                <LeseChallenge />
            </div>
            <div className="user-profile-card already-read">
                <ReadCard />
            </div>
            <div className="user-profile-card want-to-read">
                <WantToReadCard />
            </div>
        </>
    );
};

export default UserProfile;
