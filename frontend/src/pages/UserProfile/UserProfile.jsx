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
    return (
        <>
            <h1 className="profile">Profile</h1>
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
