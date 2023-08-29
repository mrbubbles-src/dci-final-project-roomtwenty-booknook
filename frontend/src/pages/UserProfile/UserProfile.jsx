import React from "react";
import useAuth from "../../customhooks/auth";

const UserProfile = () => {
    const { logout } = useAuth();

    return (
        <>
            <h1>Profile</h1>
            <button onClick={logout}>Logout</button>
        </>
    );
};

export default UserProfile;
