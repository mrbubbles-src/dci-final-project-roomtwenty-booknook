import React from "react";
import LeseChallenge from "../../components/LeseChallenge/LeseChallenge";
import "./userprofile.scss";
import FileUpload from "../../components/FileUpload/FileUpload";
import UserStatistic from "../../components/UserStatistic/UserStatistic";
import UserInfoCard from "../../components/UserProfilContent/UserInfoCard/UserInfoCard";
import CurrentlyReadingCard from "../../components/UserProfilContent/CurrentlyReadingCard/CurrentlyReadingCard";
import ReadCard from "../../components/UserProfilContent/ReadCard/ReadCard";
import WantToReadCard from "../../components/UserProfilContent/WantToReadCard/WantToReadCard";
const UserProfile = () => {
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
