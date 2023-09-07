import React from "react";
import "./UserInfoCard.scss";
import UserStatistic from "../../UserStatistic/UserStatistic";
const UserInfoCard = () => {
    return (
        <div className="user-profile profile-card-container">
            <UserStatistic />
        </div>
    );
};
export default UserInfoCard;
