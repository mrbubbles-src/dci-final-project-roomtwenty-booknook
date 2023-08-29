import React from "react";
import LeseChallenge from "../../components/LeseChallenge/LeseChallenge";
import useAuth from "../../customhooks/auth";

const UserProfile = () => {
    const { logout } = useAuth();

    return (
        <>
            <h1>Profile</h1> 
            <div>
                <LeseChallenge />
            </div>
            <button onClick={logout}>Logout</button>
        </>
    );
};

export default UserProfile;
