import React, { useEffect } from "react";
import "./UserInfoCard.scss";
import LevelExpBar from "../../LevelExpBar/LevelExpBar";

const UserInfoCard = ({ readingRank, alreadyRead }) => {
    // console.log("ar", alreadyRead);
    const alreadyReadLength = alreadyRead.length;
    // console.log("l", alreadyReadLength);
    let newReadingRank = 0;
    let xpProzent = (alreadyReadLength % 3) * 33.3;
    useEffect(() => {
        const checkBooksRead = () => {
            // zum updaten der exp-bar
            // experienceLevelBar(xpProzent);

            if (alreadyReadLength % 3 === 0) {
                newReadingRank = readingRank + 1;
                xpProzent = 0;
            } else if (alreadyReadLength % 3 === 1) {
                xpProzent = 33.3;
            } else if (alreadyReadLength % 3 === 2) {
                xpProzent = 66.6;
            }
        };
        checkBooksRead();
    }, []);

    // funktion überprüft anzahl bücher im alreadyRead
    // pro buch in list alreadyRead bekommt leiste 33,3% xp

    // und es wird wieder angezeigt für die nächsten 3 bücher usw.
    // jedes mal wenn 100% erreicht wurden, wird readingRank um 1 erhöht
    // readingRank wird bei seitenladen in state zwischen gespeichert
    // wenn readingRank höher ist als eintrag aus datenbank
    // readingRank put fetch auf /users/updateUser machen

    // (POST-ROUTE) das Buch abzuschicken mit de

    // const experienceLevelBar = () => {};

    return (
        <div className="user-profile profile-card-container">
            <div className="profile-img"></div>
            <div className="text-right">
                <LevelExpBar xpProzent={xpProzent} />
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
