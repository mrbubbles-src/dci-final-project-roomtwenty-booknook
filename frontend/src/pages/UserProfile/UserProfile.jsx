import React from "react";
import LeseChallenge from "../../components/LeseChallenge/LeseChallenge";
import "./userprofile.scss";
import FileUpload from "../../components/FileUpload/FileUpload";
import UserStatistic from "../../components/UserStatistic/UserStatistic";

const UserProfile = () => {
    return (
        <>
            <h1 className="profile">Profile</h1>
            <div>
                <UserStatistic/>
                <LeseChallenge />
                <FileUpload/>
            
            </div>

        </>
    );
};

export default UserProfile;
