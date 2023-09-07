import React from "react";
import "./UserInfoCard.scss";
import LevelExpBar from "../../LevelExpBar/LevelExpBar";
const UserInfoCard = () => {
    return (
        <div className="user-profile profile-card-container">
            <div className="profile-img"></div>
            <div className="text-right">
                <LevelExpBar xpProzent={90} />
                <div className="usercard-info-container d">
                    <p className="bücher-gelesen text-info">
                        <span className="number">20</span> Bücher gelesen.
                    </p>
                    <p className="challenges text-info">
                        <span className="number">5</span> Challenges gewonnen.
                    </p>
                    {/* <p className="freundes-liste text-info ">
                            <span className="number">15</span> Freunde
                        </p> */}
                </div>
            </div>
        </div>
    );
};
export default UserInfoCard;
