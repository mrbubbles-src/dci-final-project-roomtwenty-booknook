import React from "react";
import LeseChallenge from "../../components/LeseChallenge/LeseChallenge";
import FileUpload from "../../components/FileUpload/FileUpload";



const UserProfile = () => {
    return (
        <>
            <h1>Profile</h1>
            <div>
                <LeseChallenge />
                <FileUpload/>
            
            </div>

        </>
    );
};

export default UserProfile;
