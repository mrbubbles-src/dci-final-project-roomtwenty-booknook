import React, { useContext, useEffect, useState } from "react";
import LeseChallenge from "../../components/LeseChallenge/LeseChallenge";
import "./userprofile.scss";
import FileUpload from "../../components/FileUpload/FileUpload";
import UserStatistic from "../../components/UserStatistic/UserStatistic";
import UserInfoCard from "../../components/UserProfilContent/UserInfoCard/UserInfoCard";
import CurrentlyReadingCard from "../../components/UserProfilContent/CurrentlyReadingCard/CurrentlyReadingCard";
import ReadCard from "../../components/UserProfilContent/ReadCard/ReadCard";
import WantToReadCard from "../../components/UserProfilContent/WantToReadCard/WantToReadCard";
import { BookNookContext } from "../../context/BookNookProvider";
const UserProfile = () => {
    const { token } = useContext(BookNookContext);
    const [userdata, setUserdata] = useState({});
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
        }
        fetchData();
    }, []);

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
            <div>
                <UserStatistic />
                <LeseChallenge />
                <UserInfoCard />
                <CurrentlyReadingCard />
                <ReadCard />
                <WantToReadCard />
                <FileUpload />
            </div>
        </>
    );
};

export default UserProfile;
