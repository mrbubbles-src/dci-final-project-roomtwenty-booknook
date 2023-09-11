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

    // POT-route um user einträge zu updaten: http://localhost:3000/users/updateUser
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
    console.log("upAR", alreadyRead);
    return (
        <>
            <div>
                <UserStatistic />
                <LeseChallenge />
                <UserInfoCard
                    alreadyRead={alreadyRead && alreadyRead && alreadyRead}
                    readingRank={readingRank && readingRank}
                />
                <CurrentlyReadingCard />
                <ReadCard />
                <WantToReadCard />
                <FileUpload />
            </div>
        </>
    );
};

export default UserProfile;
