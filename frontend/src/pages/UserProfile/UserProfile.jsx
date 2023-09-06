import React from "react";
import LeseChallenge from "../../components/LeseChallenge/LeseChallenge";
import "./userprofile.scss";
import FileUpload from "../../components/FileUpload/FileUpload";
import UserStatistic from "../../components/UserStatistic/UserStatistic";
import LeseFortschritt from "../../components/UserProfilContent/LeseFortschritt";

const UserProfile = () => {
    return (
        <>
            <h1 className="profile">Profile</h1>
            <div>
                <UserStatistic />
                <LeseChallenge />
                <LeseFortschritt />
                <FileUpload />
            </div>
        </>
    );
};

export default UserProfile;
