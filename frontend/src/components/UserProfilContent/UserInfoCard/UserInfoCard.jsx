import React from "react";
import "./UserInfoCard.scss";
import LevelExpBar from "../../LevelExpBar/LevelExpBar";
const UserInfoCard = () => {

    // eine route um alle gelesenen seiten zu bekommen von dem nutzer(GET-ROUTE)
    // (POST-ROUTE) um die anzahl der gelesenen seiten zu schicken für den User ins backend
    // (POST-ROUTE) das Buch abzuschicken mit de

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
