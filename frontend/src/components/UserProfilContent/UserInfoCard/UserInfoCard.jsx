import React, { useEffect } from "react";
import "./UserInfoCard.scss";
import LevelExpBar from "../../LevelExpBar/LevelExpBar";

const UserInfoCard = ({ readingRank, alreadyRead, readingLevel }) => {
    const alreadyReadLength = alreadyRead ? alreadyRead.length : 0;
    let newReadingLevel = readingLevel;
    let xpProzent = (alreadyReadLength % 3) * 33.3;
    useEffect(() => {
        const checkBooksRead = () => {
            if (alreadyReadLength % 3 === 0) {
                newReadingLevel += 1;
                xpProzent = 0;
                return newReadingLevel, xpProzent;
            } else if (alreadyReadLength % 3 === 1) {
                newReadingLevel += 1;
                xpProzent = 33.3;
                return newReadingLevel, xpProzent;
            } else if (alreadyReadLength % 3 === 2) {
                newReadingLevel += 1;
                xpProzent = 66.6;
                return newReadingLevel, xpProzent;
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
            <p>{newReadingLevel}</p>
            <LevelExpBar xpProzent={xpProzent} />
        </div>
    );
};
export default UserInfoCard;
