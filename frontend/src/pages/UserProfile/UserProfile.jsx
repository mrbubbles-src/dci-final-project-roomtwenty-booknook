import React from "react";
import LeseChallenge from "../../components/LeseChallenge/LeseChallenge";
import FileUpload from "../../components/FileUpload/FileUpload";
import UserStatistic from "../../components/UserStatistic/UserStatistic";




const UserProfile = () => {
    return (
        <>
            <h1>Profile</h1>
            <div>
                <UserStatistic/>
                <LeseChallenge />
                <FileUpload/>
            
            </div>

        </>
    );
};

export default UserProfile;
